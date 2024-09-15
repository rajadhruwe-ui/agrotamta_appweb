import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PandingbillPageRoutingModule } from './pandingbill-routing.module';

import { PandingbillPage } from './pandingbill.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PandingbillPageRoutingModule
  ],
  declarations: [PandingbillPage]
})
export class PandingbillPageModule {}
