import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmbillPage } from './confirmbill.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmbillPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmbillPageRoutingModule {}
