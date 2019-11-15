import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { TicketDetailComponent } from './ticket-detail/ticket-detail.component';
import { InlineSVGModule } from 'ng-inline-svg';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }]),
    InlineSVGModule.forRoot()

  ],
  declarations: [Tab1Page, TicketDetailComponent],
  entryComponents:[
    TicketDetailComponent
  ]
})
export class Tab1PageModule {}
