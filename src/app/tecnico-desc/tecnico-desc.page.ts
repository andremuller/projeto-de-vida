import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tecnico-desc',
  templateUrl: './tecnico-desc.page.html',
  styleUrls: ['./tecnico-desc.page.scss'],
})
export class TecnicoDescPage implements OnInit {
  public modalAberto = false;
  constructor(public modalController: ModalController) { }
 
  abreModal(idUsuario, idDisci){
    if(this.modalAberto){
      this.modalAberto = false;
    }else{
      this.modalAberto = true;
    }
  }
  ngOnInit() {
  }
  
}
