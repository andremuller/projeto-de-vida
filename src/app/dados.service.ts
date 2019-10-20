import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DadosService {
    public nome: string;
    public matricula: string;
    public ensinoMedio: boolean;
    public avatar: number;

    avatarAtual$: Observable<number>;
    protected _avatarAtual$: BehaviorSubject<number>;

    constructor() {
        this.nome = 'João Almeida';
        this.avatar = 1;

        this._avatarAtual$ = new BehaviorSubject<number>(this.avatar);
        this.avatarAtual$ = this._avatarAtual$.asObservable();
    }

    setAvatarAtual(avatar: number) {
      this.avatar = avatar;
      this._avatarAtual$.next(
        this.avatar
      );
    }
  }
