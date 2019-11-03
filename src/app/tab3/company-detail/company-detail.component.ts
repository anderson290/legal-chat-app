import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ModalController, NavParams, IonContent } from '@ionic/angular';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.scss'],
})
export class CompanyDetailComponent implements OnInit {


  @Input() company;

  ticket: any;
  messages: any;
  textMessage: string;

  constructor(
    private modalCtrl: ModalController,
    private navParams: NavParams,
    private ticketService: TicketService
  ) { }
  @ViewChild('content', { static: true }) content: IonContent;
  // currentModal: any;
  ngOnInit() { 
    this.getMessages();
  }

  getMessages(){
    this.ticketService.getTicketByCompany(this.navParams.data._id).then(res=>{
      this.ticket = res[0];
    });
  }

  currentUser = 'user';

  sendMessage(){
    setTimeout(() => {
      this.content.scrollToBottom(200);
    })

    this.ticket.conversation.push({
      userType: 'user',
      message: this.textMessage
    });

    console.log(this.ticket);
        this.ticketService.updateTicket(this.ticket).then(res =>{
      if(res){
        this.getMessages();
        this.textMessage = '';
      }
    });


  }

  dismissModal() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }
}

