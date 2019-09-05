import { Component, ViewChild, OnInit } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {


  @ViewChild('content', {static: true}) content: IonContent;

  public date = new Date();

  public newMsg: string = '';

  constructor() {}

  ngOnInit(){
    setTimeout(()=>{
      this.content.scrollToBottom(200);
    });
  }
  messages = [
    {
      user: 'Anderson',
      createdAt: Date.now(),
      msg: 'Hey'
    },
    {
      user: 'Max',
      createdAt: Date.now(),
      msg: 'whatsup'
    },
    {
      user: 'Anderson',
      createdAt: Date.now(),
      msg: 'upup'
    },
    {
      user: 'Max',
      createdAt: Date.now(),
      msg: 'Alo'
    }
  ]

  currentUser = 'Anderson';
  
  sendMessage(){
    this.messages.push({
      user: 'Anderson',
      createdAt: new Date().getTime(),
      msg: this.newMsg
    });

    this.newMsg = '';

    setTimeout(()=>{
      this.content.scrollToBottom(200);
    })
  }

}
