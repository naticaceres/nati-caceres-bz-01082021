import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { ModalComponent } from "./components/modal/modal.component";
import { FindPolicyModalComponent } from "./components/find-policy-modal/find-policy-modal.component";
import { PurchaseFormComponent } from "./components/purchase-form/purchase-form.component";
import { IntroComponent } from "./components/find-policy-modal/intro/intro.component";
import { StepperComponent } from "./components/find-policy-modal/stepper/stepper.component";
import { ButtonToggleComponent } from "./components/find-policy-modal/button-toggle/button-toggle.component";
import { FindPolicyFormComponent } from "./components/find-policy-modal/find-policy-form/find-policy-form.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ModalComponent,
    FindPolicyModalComponent,
    PurchaseFormComponent,
    IntroComponent,
    StepperComponent,
    ButtonToggleComponent,
    FindPolicyFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
