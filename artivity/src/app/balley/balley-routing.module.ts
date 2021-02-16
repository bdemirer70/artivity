import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BalleyPage } from './balley.page';

const routes: Routes = [
  {
    path: '',
    component: BalleyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BalleyPageRoutingModule {}
