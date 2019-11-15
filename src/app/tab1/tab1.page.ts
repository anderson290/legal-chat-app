import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { TicketService } from '../services/ticket.service';
import { ModalController } from '@ionic/angular';
import { TicketDetailComponent } from './ticket-detail/ticket-detail.component';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  tokenObj: any;
  tickets: any;
  companyName: any;
  user: any;
  constructor(
    private authService: AuthService,
    private ticketService: TicketService,
    private companyService: CompanyService,
    private modalController: ModalController
  ) {}

  ngOnInit(){
    this.getUser();
  }

  getUser(){
    this.tokenObj = JSON.parse(localStorage.getItem('user'));
    this.authService.decodeToken(this.tokenObj.token).subscribe(res => {
      this.user = res.user;
      this.getTicketsUser();
    });
  }

 async getTicketsUser(){
    await this.ticketService.getTicketByUser(this.user._id).then(res=>{
      this.tickets = res;
      this.tickets = this.tickets.filter(res => res.status=='closed');
    });
  }

  logout(){
    localStorage.clear();
  }


  async openTicket(ticket){
      const modal = await this.modalController.create({
        component: TicketDetailComponent,
        componentProps: ticket
      });
      return await modal.present();
  }

}
