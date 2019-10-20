import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EscolhaAvatarPage } from './escolha-avatar.page';

const routes: Routes = [
  {
    path: '',
    component: EscolhaAvatarPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EscolhaAvatarPage]
})
export class EscolhaAvatarPageModule {}
