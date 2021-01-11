import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FindPolicyFormComponent } from "./components/find-policy-form/find-policy-form.component";
import { HomeComponent } from "./components/home/home.component";
import { PurchaseFormComponent } from "./components/purchase-form/purchase-form.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "find-policy", component: FindPolicyFormComponent, outlet: "modal" },
  { path: "purchase", component: PurchaseFormComponent, outlet: "modal" },
  { path: "**", redirectTo: "home" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
