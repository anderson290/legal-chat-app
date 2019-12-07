import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../services/company.service';
import { ModalController } from '@ionic/angular';
import { TicketService } from 'src/app/services/ticket.service';
import { CompanyDetailComponent } from './company-detail/company-detail.component';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

  companies: any;
  ticket: any = undefined;

  constructor(
    private companyService: CompanyService,
    public modalController: ModalController
  ) {}

  ngOnInit(){
    this.getCompanies();
  }

  async getCompanies(){
    await this.companyService.getCompanies().then(res=>{
      this.companies = res;
      this.companies=this.companies.filter(res=>res.level === 1);
     });   
  }

  async presentModal(company) {
    const modal = await this.modalController.create({
      component: CompanyDetailComponent,
      componentProps: company
    });
    return await modal.present();
  }
}
