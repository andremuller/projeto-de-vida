import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { IniciarTrilhaPage } from './iniciar-trilha.page';

const routes: Routes = [
  {
    path: '',
    component: IniciarTrilhaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [IniciarTrilhaPage]
})
export class IniciarTrilhaPageModule {}
