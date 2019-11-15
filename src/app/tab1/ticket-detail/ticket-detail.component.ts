import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, IonContent, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.scss'],
})
export class TicketDetailComponent implements OnInit {

  ticket: any;
  constructor(
    private modalCtrl: ModalController,
    private navParams: NavParams
  ) { }
  @ViewChild('content', { static: true }) content: IonContent;
  currentUser: string = 'user';
  ngOnInit() {
    this.ticket = this.navParams.data;
  }

  closeModal(){
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }
}
