import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PendingbillPage } from './pendingbill.page';

const routes: Routes = [
  {
    path: '',
    component: PendingbillPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PendingbillPageRoutingModule {}
