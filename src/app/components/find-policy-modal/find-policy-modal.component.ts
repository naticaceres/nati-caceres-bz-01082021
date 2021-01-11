import { Component, OnInit } from "@angular/core";
import { InsuranceRequest } from "./model/insurance-request.model";

@Component({
  selector: "app-find-policy-modal",
  templateUrl: "./find-policy-modal.component.html",
  styleUrls: ["./find-policy-modal.component.scss"],
})
export class FindPolicyModalComponent implements OnInit {
  insuranceRequest: InsuranceRequest;
  //  = {
  //   insuranceType: "type",
  //   businessName: "burguer",
  //   phoneNumber: "3414213",
  //   state: "mistate",
  //   designOwnership: false,
  //   includeBuildingCoverage: true,
  //   businessStartDate: "01-01-1991",
  // };
  isIntro = true;
  isResults = false;
  constructor() {}

  ngOnInit(): void {
    this.isIntro = true;
    this.isResults = false;
  }
}
