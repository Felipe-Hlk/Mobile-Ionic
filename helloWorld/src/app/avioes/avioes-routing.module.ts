import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AvioesPage } from './avioes.page';

const routes: Routes = [
  {
    path: '',
    component: AvioesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AvioesPageRoutingModule {}
