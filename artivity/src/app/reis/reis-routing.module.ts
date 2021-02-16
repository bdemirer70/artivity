import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReisPage } from './reis.page';

const routes: Routes = [
  {
    path: '',
    component: ReisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReisPageRoutingModule {}
