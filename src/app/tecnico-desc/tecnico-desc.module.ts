import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TecnicoDescPage } from './tecnico-desc.page';

const routes: Routes = [
  {
    path: '',
    component: TecnicoDescPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TecnicoDescPage]
})
export class TecnicoDescPageModule {}
