import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TheatrePageRoutingModule } from './theatre-routing.module';

import { TheatrePage } from './theatre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TheatrePageRoutingModule
  ],
  declarations: [TheatrePage]
})
export class TheatrePageModule {}
