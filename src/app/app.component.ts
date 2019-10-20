import { Component } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';
import { DadosService } from './dados.service';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {
    public appPages = [
        {
            title: 'Início',
            url: '/home',
            icon: 'home'
        },
        {
            title: 'Carreira',
            url: '/carreira',
            icon: 'compass'
        },
        {
            title: 'Avatar',
            url: '/avatar',
            icon: 'contact'
        },
        {
            title: 'Boletim',
            url: '/boletim',
            icon: 'clipboard'
        }
    ];

    public imagemAvatar: string;

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private menuCtrl: MenuController,
        private router: Router,
        private dadosService: DadosService,
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });

        this.dadosService.avatarAtual$.subscribe(avatarId =>{
            this.imagemAvatar = `../assets/images/avatar${avatarId}.png`;
        });

        this.router.events.subscribe((event: RouterEvent) => {
            if (event instanceof NavigationEnd && event.url) {
                if (event.url === '/landing'
                    || event.url === '/login'
                    || event.url === '/iniciar-trilha'
                    || event.url === '/avatar'
                    ) {
                    this.menuCtrl.enable(false);
                } else {
                  this.menuCtrl.enable(true);
                }
            }
        });
    }
}
