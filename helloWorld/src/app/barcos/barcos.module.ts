import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BarcosPageRoutingModule } from './barcos-routing.module';

import { BarcosPage } from './barcos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BarcosPageRoutingModule
  ],
  declarations: [BarcosPage]
})
export class BarcosPageModule {}
