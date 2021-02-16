import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BalePageRoutingModule } from './bale-routing.module';

import { BalePage } from './bale.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BalePageRoutingModule
  ],
  declarations: [BalePage]
})
export class BalePageModule {}
