import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BalleyPageRoutingModule } from './balley-routing.module';

import { BalleyPage } from './balley.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BalleyPageRoutingModule
  ],
  declarations: [BalleyPage]
})
export class BalleyPageModule {}
