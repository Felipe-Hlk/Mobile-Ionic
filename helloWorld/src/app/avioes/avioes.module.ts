import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AvioesPageRoutingModule } from './avioes-routing.module';

import { AvioesPage } from './avioes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AvioesPageRoutingModule
  ],
  declarations: [AvioesPage]
})
export class AvioesPageModule {}
