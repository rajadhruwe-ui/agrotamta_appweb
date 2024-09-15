import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PendingbillPageRoutingModule } from './pendingbill-routing.module';

import { PendingbillPage } from './pendingbill.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PendingbillPageRoutingModule
  ],
  declarations: [PendingbillPage]
})
export class PendingbillPageModule {}
