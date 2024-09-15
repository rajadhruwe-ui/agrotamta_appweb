import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmbillPageRoutingModule } from './confirmbill-routing.module';

import { ConfirmbillPage } from './confirmbill.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmbillPageRoutingModule
  ],
  declarations: [ConfirmbillPage]
})
export class ConfirmbillPageModule {}
