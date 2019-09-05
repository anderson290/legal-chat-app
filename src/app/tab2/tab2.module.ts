import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';

import { AutosizeModule } from 'ngx-autosize';
import { InlineSVGModule } from 'ng-inline-svg';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    AutosizeModule,
    RouterModule.forChild([{ path: '', component: Tab2Page }]),
    InlineSVGModule.forRoot()
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}
