import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BalePage } from './bale.page';

const routes: Routes = [
  {
    path: '',
    component: BalePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BalePageRoutingModule {}
