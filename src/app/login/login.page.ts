import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { DadosService } from '../dados.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
    constructor(
        public navCtrl: NavController,
        private http: HttpClient,
        private dadosService: DadosService
    ) {}

    public matricula: string;

    ngOnInit() {}

    goHome() {
        this.http
            .get(`http://localhost:8000/api/alunos?matricula=${this.matricula}`)
            .subscribe((result: any) => {
                if (result.data) {
                    this.dadosService.nome = result.data.nome;
                    this.dadosService.matricula = result.data.matricula;
                    this.dadosService.ensinoMedio =
                        result.data.ensinoMedio === 1;
                    if (this.dadosService.ensinoMedio) {
                        this.navCtrl.navigateForward('home');
                    } else {
                        this.navCtrl.navigateForward('home');
                    }
                } else {
                    this.dadosService.nome = '';
                    this.dadosService.matricula = '';
                    this.dadosService.ensinoMedio = false;
                }
            });
    }
}
