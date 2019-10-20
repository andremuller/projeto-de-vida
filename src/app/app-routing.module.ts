import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'landing', loadChildren: './landing/landing.module#LandingPageModule' },
  { path: 'start', loadChildren: './start/start.module#StartPageModule' },
  { path: 'carreira', loadChildren: './carreira/carreira.module#CarreiraPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'avatar', loadChildren: './avatar/avatar.module#AvatarPageModule' },
<<<<<<< HEAD
  { path: 'linguagem-desc', loadChildren: './linguagem-desc/linguagem-desc.module#LinguagemDescPageModule' },
  { path: 'matematica-desc', loadChildren: './matematica-desc/matematica-desc.module#MatematicaDescPageModule' },
  { path: 'naturais-desc', loadChildren: './naturais-desc/naturais-desc.module#NaturaisDescPageModule' },
  { path: 'humanas-desc', loadChildren: './humanas-desc/humanas-desc.module#HumanasDescPageModule' }
=======
  { path: 'escolha-avatar', loadChildren: './escolha-avatar/escolha-avatar.module#EscolhaAvatarPageModule' }
>>>>>>> ee2d462aeba745700f75a320ee7b0a390ca630df
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
