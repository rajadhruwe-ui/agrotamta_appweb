import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

// import {AngularFireModule} from 'angularfire2';


import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// import { BillComponent } from './bill/bill.component';
import { FormsModule } from '@angular/forms';
 
 
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
   IonicModule.forRoot(), 
   AppRoutingModule,
   FormsModule,
 
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
