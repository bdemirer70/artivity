import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SekspirPageRoutingModule } from './sekspir-routing.module';

import { SekspirPage } from './sekspir.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SekspirPageRoutingModule
  ],
  declarations: [SekspirPage]
})
export class SekspirPageModule {}
