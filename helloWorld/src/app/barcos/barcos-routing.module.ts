import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BarcosPage } from './barcos.page';

const routes: Routes = [
  {
    path: '',
    component: BarcosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BarcosPageRoutingModule {}
