import { Injectable } from "@angular/core";
import { InsuranceRequest } from "../model/insurance-request.model";

@Injectable({
  providedIn: "root",
})
export class StateService {
  private insuranceRequestModel: InsuranceRequest;

  constructor() {}

  setInsuranceRequest(insuranceRequest: InsuranceRequest) {
    this.insuranceRequestModel = insuranceRequest;
  }

  getInsuranceRequest() {
    return this.insuranceRequestModel;
  }
}
