import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginskipPageRoutingModule } from './loginskip-routing.module';

import { LoginskipPage } from './loginskip.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginskipPageRoutingModule
  ],
  declarations: [LoginskipPage]
})
export class LoginskipPageModule {}
