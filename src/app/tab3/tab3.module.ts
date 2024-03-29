import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { CompanyDetailComponent } from './company-detail/company-detail.component';

@NgModule({
  declarations:[
    Tab3Page,
    CompanyDetailComponent,


  ],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab3Page }])
  ],
  entryComponents:[
    CompanyDetailComponent
  ]
})
export class Tab3PageModule {}
