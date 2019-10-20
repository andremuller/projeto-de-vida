import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tecnico-desc',
  templateUrl: './tecnico-desc.page.html',
  styleUrls: ['./tecnico-desc.page.scss'],
})
export class TecnicoDescPage implements OnInit {
 
  public dados:boolean = false;
  public faltasB1:string;
  public faltasB2:string;
  public faltasB3:string;
  public faltasB4:string;
   

  constructor() { }
  mostrarDescDisciplina(id){
    this.dados = true;
    this.faltasB1 = "10";
    this.faltasB2 = "2";
    this.faltasB3 = "0";
    this.faltasB4 = "0";
  }
  ngOnInit() {
  }

}
