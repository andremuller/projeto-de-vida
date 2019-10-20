import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boletim',
  templateUrl: './boletim.page.html',
  styleUrls: ['./boletim.page.scss'],
})
export class BoletimPage implements OnInit {

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
