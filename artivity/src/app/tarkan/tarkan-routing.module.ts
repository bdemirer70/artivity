import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TarkanPage } from './tarkan.page';

const routes: Routes = [
  {
    path: '',
    component: TarkanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TarkanPageRoutingModule {}
