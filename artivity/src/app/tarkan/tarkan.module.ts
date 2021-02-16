import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TarkanPageRoutingModule } from './tarkan-routing.module';

import { TarkanPage } from './tarkan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TarkanPageRoutingModule
  ],
  declarations: [TarkanPage]
})
export class TarkanPageModule {}
