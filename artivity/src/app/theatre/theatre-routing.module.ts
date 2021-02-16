import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TheatrePage } from './theatre.page';

const routes: Routes = [
  {
    path: '',
    component: TheatrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TheatrePageRoutingModule {}
