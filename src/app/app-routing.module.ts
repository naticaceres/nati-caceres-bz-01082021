import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FindPolicyModalComponent } from "./components/find-policy-modal/find-policy-modal.component";
import { HomeComponent } from "./components/home/home.component";
import { PurchaseFormComponent } from "./components/purchase-form/purchase-form.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "find-policy", component: FindPolicyModalComponent, outlet: "modal" },
  { path: "purchase", component: PurchaseFormComponent, outlet: "modal" },
  { path: "**", redirectTo: "home" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
