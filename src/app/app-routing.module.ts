import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FindPolicyFormComponent } from "./components/find-policy-modal/find-policy-form/find-policy-form.component";
import { FindPolicyModalComponent } from "./components/find-policy-modal/find-policy-modal.component";
import { IntroComponent } from "./components/find-policy-modal/intro/intro.component";
import { ResultsComponent } from "./components/find-policy-modal/results/results.component";
import { HomeComponent } from "./components/home/home.component";
import { ModalComponent } from "./components/modal/modal.component";
import { PurchaseFormComponent } from "./components/purchase-form/purchase-form.component";

const routes: Routes = [
  { path: "home", component: HomeComponent, data: { animation: "Home" } },
  {
    path: "modal",
    component: ModalComponent,
    outlet: "modal",
    data: { animation: "modal" },
    children: [
      {
        path: "find-policy-intro",
        component: IntroComponent,
        data: { animation: "intro" },
      },
      {
        path: "find-policy-form/:step",
        component: FindPolicyFormComponent,
        data: { animation: "findPolicyForm" },
      },
      {
        path: "results",
        component: ResultsComponent,
        data: { animation: "results" },
      },
    ],
  },
  {
    path: "find-policy",
    component: FindPolicyModalComponent,
    outlet: "modal",
    data: { animation: "FindPolicy" },
  },
  {
    path: "purchase",
    component: PurchaseFormComponent,
    outlet: "modal",
    data: { animation: "Purchase" },
  },
  { path: "**", redirectTo: "home", pathMatch: "full" },
  { path: "", redirectTo: "home", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
