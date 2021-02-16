import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReisPageRoutingModule } from './reis-routing.module';

import { ReisPage } from './reis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReisPageRoutingModule
  ],
  declarations: [ReisPage]
})
export class ReisPageModule {}
