import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ModalController, NavParams, IonContent, LoadingController, AlertController } from '@ionic/angular';
import { TicketService } from 'src/app/services/ticket.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.scss'],
})
export class CompanyDetailComponent implements OnInit {


  @Input() company;

  ticket: any = undefined;

  ticketModel: any = {
    title: '',
    conversation: {
      userType: 'user',
      message: ''
    },
    companyId: '',
    status: 'inProgress'
  };
  messages: any;
  textMessage: string;
  tokenObj: any;
  user: any;


  constructor(
    private modalCtrl: ModalController,
    private navParams: NavParams,
    private ticketService: TicketService,
    public loadingController: LoadingController,
    private alertController: AlertController,
    private authService: AuthService
  ) { }
  @ViewChild('content', { static: true }) content: IonContent;
  // currentModal: any;
  ngOnInit() { 
    this.getMessages();
    this. getUser();

  }

  async presentLoading() {
  


  }

  getUser(){
    this.tokenObj = JSON.parse(localStorage.getItem('user'));
    this.authService.decodeToken(this.tokenObj.token).subscribe(res => {
      this.user = res.user;
    });
  }


  async getMessages(){
    const loading = await this.loadingController.create({
      message: 'Carregando',
      duration: 1000
    });
    await loading.present();

    await this.ticketService.getTicketByCompany(this.navParams.data._id).then(res=>{
      this.ticket = res;
     
      this.ticket = this.ticket.filter(res=>res.userId == this.user._id);
      this.ticket = this.ticket[this.ticket.length - 1];
      
      console.log(res);

      loading.onDidDismiss();
    });
  }

  currentUser = 'user';

  async sendMessage(key?){
   


    if(key == 'new'){
     
      this.ticketModel.companyId = this.navParams.data._id;
      this.ticketModel.userId = this.user._id;
      this.ticketService.createTicket(this.ticketModel).then(res=>{
        if(res){
          this.dismissModal();     
          this.presentAlert();
          this.textMessage = '';
        }
      })
     
  
    }else{
      setTimeout(() => {
        this.content.scrollToBottom(200);
      })
  
      this.ticket.conversation.push({
        userType: 'user',
        message: this.textMessage
      });
      
      this.ticketService.updateTicket(this.ticket).then(res =>{
        if(res){
          this.getMessages();
          this.textMessage = '';
        }
      });
    }  


  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Chamado Aberto',
      message: 'Solicitação de chamado feita com sucesso',
      buttons: ['OK']
    });

    await alert.present();
  }
  dismissModal() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }
}

