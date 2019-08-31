import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}

  messages = [
    {
      user: 'Anderson',
      createdAt: 20191009,
      msg: 'Hey'
    },
    {
      user: 'Max',
      createdAt: 20191009,
      msg: 'whatsup'
    },
    {
      user: 'Anderson',
      createdAt: 20191009,
      msg: 'upup'
    }
  ]

  currentUser = 'Anderson';
  
  sendMessage(){

  }

}
