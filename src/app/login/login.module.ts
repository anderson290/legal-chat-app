import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login.router';
import { RegisterComponent } from './register/register.component';
import {NgxMaskIonicModule} from 'ngx-mask-ionic';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LoginRoutingModule,
    NgxMaskIonicModule
  ],
  declarations: [LoginComponent, RegisterComponent]
})
export class LoginModule {}
