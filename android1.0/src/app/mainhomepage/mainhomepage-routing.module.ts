import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainhomepagePage } from './mainhomepage.page';

const routes: Routes = [
  {
    path: '',
    component: MainhomepagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainhomepagePageRoutingModule {}
