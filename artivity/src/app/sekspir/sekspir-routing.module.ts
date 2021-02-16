import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SekspirPage } from './sekspir.page';

const routes: Routes = [
  {
    path: '',
    component: SekspirPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SekspirPageRoutingModule {}
