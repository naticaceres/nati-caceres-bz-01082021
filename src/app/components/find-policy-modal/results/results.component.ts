import { DatePipe } from "@angular/common";
import { Component } from "@angular/core";
import { InsuranceRequest } from "../model/insurance-request.model";
import { StateService } from "../services/state.service";
import { Quote } from "./quote/quote.model";

@Component({
  selector: "app-results",
  templateUrl: "./results.component.html",
  styleUrls: ["./results.component.scss"],
})
export class ResultsComponent {
  insuranceRequestValue: InsuranceRequest;
  paragraph1 = "";
  paragraph2 = "";
  paragraph3 = "";
  paragraph4 = "";

  quoteResults: Quote[] = [
    {
      name: "progressive",
      logoSource: "progressive.svg",
      rating: 4.5,
      priceMonth: 120,
      priceYear: 1440,
    },
    {
      name: "geico",
      logoSource: "geico.svg",
      rating: 4,
      priceMonth: 125,
      priceYear: 1500,
    },
    {
      name: "state farm",
      logoSource: "state-farm.png",
      rating: 3.5,
      priceMonth: 125,
      priceYear: 1500,
    },
  ];

  constructor(private datePipe: DatePipe, stateService: StateService) {
    this.insuranceRequestValue = stateService.getInsuranceRequest();
    this.buildSummary(this.insuranceRequestValue);
  }
  buildSummary(searchData: InsuranceRequest): void {
    this.paragraph1 = `${
      searchData.businessName
    }, established on ${this.datePipe.transform(
      searchData.businessStartDate,
      "mediumDate"
    )}, and operating out of ${searchData.state}, is interested in purchasing ${
      searchData.insuranceType
    } insurance.`;

    this.paragraph2 = `${searchData.businessName} would ${
      searchData.includeBuildingCoverage ? "also" : "not"
    } like building coverage included in their policy. `;

    this.paragraph3 = `${searchData.businessName} ${
      searchData.designOwnership ? "does" : "doesn't do"
    } their own designs in-house${
      searchData.designOwnership ? "" : " and would need design assistance"
    }.`;

    this.paragraph4 = `${searchData.businessName} can be reached at ${searchData.phoneNumber}.`;
  }
}
