import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {

  tokenObj: any;
  user: any;

  constructor(
    private authService: AuthService
  ) {}

  ngOnInit(){
    this.getCompany();
  }

  getCompany(){
    this.tokenObj = JSON.parse(localStorage.getItem('user'));
    this.authService.decodeToken(this.tokenObj.token).subscribe(res => {
      this.user = res.user;
    });
  }


}
