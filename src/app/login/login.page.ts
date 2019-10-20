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
    public naoEncontrado: boolean | null;

    ngOnInit() {
        this.naoEncontrado = null;
    }

    goHome() {
        this.http
            .get(`http://localhost:8000/api/alunos?matricula=${this.matricula}`)
            .subscribe((result: any) => {
                if (result.data.length) {
                    this.dadosService.nome = result.data.nome;
                    this.dadosService.matricula = result.data.matricula;
                    this.dadosService.ensinoMedio =
                        result.data.ensinoMedio === 1;
                    if (this.dadosService.ensinoMedio) {
                        this.navCtrl.navigateForward('avatar');
                    } else {
                        this.navCtrl.navigateForward('iniciar-trilha');
                    }
                } else {
                    this.naoEncontrado = true;
                    this.dadosService.nome = '';
                    this.dadosService.matricula = '';
                    this.dadosService.ensinoMedio = false;
                }
            });
    }
}
