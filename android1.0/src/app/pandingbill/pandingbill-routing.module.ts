import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PandingbillPage } from './pandingbill.page';

const routes: Routes = [
  {
    path: '',
    component: PandingbillPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PandingbillPageRoutingModule {}
