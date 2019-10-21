import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.scss'],
})
export class CompanyDetailComponent implements OnInit {

  constructor() { }

  // currentModal: any;
  ngOnInit() {}
  dismissModal(currentModal) {
    // if (currentModal) {
      // currentModal.dismiss().then(() => { currentModal = null; });
    // }
  }
}

