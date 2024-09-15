import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainhomepagePageRoutingModule } from './mainhomepage-routing.module';

import { MainhomepagePage } from './mainhomepage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainhomepagePageRoutingModule
  ],
  declarations: [MainhomepagePage]
})
export class MainhomepagePageModule {}
