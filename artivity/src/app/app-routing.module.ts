import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'slides',
    loadChildren: () => import('./slides/slides.module').then( m => m.SlidesPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: '/slides',
    pathMatch: 'full'
  },
  {
    path: 'sekspir',
    loadChildren: () => import('./sekspir/sekspir.module').then( m => m.SekspirPageModule)
  },
  {
    path: 'theatre',
    loadChildren: () => import('./theatre/theatre.module').then( m => m.TheatrePageModule)
  },
  {
    path: 'concert',
    loadChildren: () => import('./concert/concert.module').then( m => m.ConcertPageModule)
  },
  {
    path: 'balley',
    loadChildren: () => import('./balley/balley.module').then( m => m.BalleyPageModule)
  },
  {
    path: 'musical',
    loadChildren: () => import('./musical/musical.module').then( m => m.MusicalPageModule)
  },
  {
    path: 'reis',
    loadChildren: () => import('./reis/reis.module').then( m => m.ReisPageModule)
  },
  {
    path: 'bale',
    loadChildren: () => import('./bale/bale.module').then( m => m.BalePageModule)
  },
  {
    path: 'tarkan',
    loadChildren: () => import('./tarkan/tarkan.module').then( m => m.TarkanPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
