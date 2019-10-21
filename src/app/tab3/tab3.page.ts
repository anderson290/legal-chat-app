import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../services/company.service';
import { ModalController } from '@ionic/angular';
import { CompanyDetailComponent } from './company-detail/company-detail.component';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

  companies: any;

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
     });   
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: CompanyDetailComponent
    });
    return await modal.present();
  }
}
