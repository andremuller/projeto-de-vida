import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  public nome: string;
  public matricula: string;
  public ensinoMedio: boolean;

  constructor() { 
    this.nome = 'João Almeida';
  }
}
