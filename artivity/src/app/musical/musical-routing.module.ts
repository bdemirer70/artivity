import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MusicalPage } from './musical.page';

const routes: Routes = [
  {
    path: '',
    component: MusicalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MusicalPageRoutingModule {}
