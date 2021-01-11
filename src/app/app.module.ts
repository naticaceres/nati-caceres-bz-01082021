import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ModalComponent } from './components/modal/modal.component';
import { FindPolicyFormComponent } from './components/find-policy-form/find-policy-form.component';
import { PurchaseFormComponent } from './components/purchase-form/purchase-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ModalComponent,
    FindPolicyFormComponent,
    PurchaseFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
