import { Component, ViewChild, OnInit } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {


  @ViewChild('content', { static: true }) content: IonContent;

  public date = new Date();

  public newMsg: string = '';

  public recieveMessage: any = null;

  public loading: boolean = false;

  public type: string;

  public conversationLog: any;

  constructor(
    private chatService: ChatService
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.content.scrollToBottom(200);
    });

    sessionStorage.setItem('conversation', '');
    this.getMessage();
  }

  messages = [];

  async getMessage() {
    this.loading = true;
    if (sessionStorage.getItem('conversation')) {
      this.conversationLog = JSON.parse(sessionStorage.getItem('conversation'));
      if (this.conversationLog.output.generic[0].response_type == 'text') {
        this.recieveMessage = this.conversationLog.output.generic[0].text;
        this.messages.push({
          user: 'Max',
          createdAt: Date.now(),
          msg: this.recieveMessage
        });
      }
    } else {
      await this.chatService.getMessage().then(res => {
        this.loading = false;
        this.recieveMessage = res;
        this.type = this.recieveMessage.options.response_type;
      });
      this.messages.push({
        user: 'Max',
        createdAt: Date.now(),
        msg: this.recieveMessage.message
      });
    }
  }

  async getOption(option) {
    console.log('option', option);
    this.newMsg = option;
    this.sendMessage();
  }

  currentUser = 'User';

  async sendMessage() {
    this.messages.push({
      user: 'User',
      createdAt: new Date().getTime(),
      msg: this.newMsg
    });

    let param = {
      message: this.newMsg,
      context: {}
    }

    let watsonMsg;

    if (this.conversationLog) {
      param.context = this.conversationLog.context
      watsonMsg = await this.chatService.sendMessage(param);

    } else {
      watsonMsg = await this.chatService.sendMessage(param);
    }

    console.log(watsonMsg);

    sessionStorage.setItem('conversation', JSON.stringify(watsonMsg));

    this.getMessage();

    this.newMsg = '';

    setTimeout(() => {
      this.content.scrollToBottom(200);
    })
  }

}
