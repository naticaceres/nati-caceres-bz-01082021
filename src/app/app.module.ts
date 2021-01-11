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
import { ResultsComponent } from "./components/find-policy-modal/results/results.component";
import { QuoteComponent } from "./components/find-policy-modal/results/quote/quote.component";
import { StarRatingComponent } from "./components/find-policy-modal/results/star-rating/star-rating.component";
import { DatePipe } from "@angular/common";

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
    ResultsComponent,
    QuoteComponent,
    StarRatingComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
