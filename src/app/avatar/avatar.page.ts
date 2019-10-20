import { Component, OnInit } from '@angular/core';
import { DadosService } from '../dados.service';
import { NavController } from '@ionic/angular';

@Component({
    selector: 'app-avatar',
    templateUrl: './avatar.page.html',
    styleUrls: ['./avatar.page.scss']
})
export class AvatarPage implements OnInit {
    constructor(
        private dadosService: DadosService,
        private navCtrl: NavController
    ) {}

    ngOnInit() {}

    selecaoAvatar(id: number) {
        this.dadosService.setAvatarAtual(id);
        this.navCtrl.navigateForward('home');
    }
}
