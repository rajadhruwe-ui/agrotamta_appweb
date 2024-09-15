import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginskipPage } from './loginskip.page';

const routes: Routes = [
  {
    path: '',
    component: LoginskipPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginskipPageRoutingModule {}
