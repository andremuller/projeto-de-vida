import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-carreira',
  templateUrl: './carreira.page.html',
  styleUrls: ['./carreira.page.scss'],
})
export class CarreiraPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  navigate(url){
    this.navCtrl.navigateForward(url);
  }

}
