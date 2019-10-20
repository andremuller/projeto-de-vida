import { Component, OnInit } from '@angular/core';
import { DadosService } from '../dados.service';
import { NavController } from '@ionic/angular';

@Component({
    selector: 'app-iniciar-trilha',
    templateUrl: './iniciar-trilha.page.html',
    styleUrls: ['./iniciar-trilha.page.scss']
})
export class IniciarTrilhaPage implements OnInit {
    constructor(
        private dadosService: DadosService,
        private navCtrl: NavController
    ) {}

    ngOnInit() {}

    navegar() {
        this.navCtrl.navigateForward('avatar');
    }
}
