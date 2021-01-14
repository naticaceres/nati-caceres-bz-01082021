import { Location } from "@angular/common";
import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
  ViewChildren,
} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ButtonToggleOption } from "../button-toggle/button-toggle-option.model";
import { InsuranceRequest } from "../model/insurance-request.model";
import { StateService } from "../services/state.service";
import { US_STATE_LIST } from "./us-state-list.enum";

@Component({
  selector: "app-find-policy-form",
  templateUrl: "./find-policy-form.component.html",
  styleUrls: ["./find-policy-form.component.scss"],
})
export class FindPolicyFormComponent implements OnInit {
  @Output() formComplete = new EventEmitter<InsuranceRequest>();

  currentStepNumber = 1;

  usStateList = US_STATE_LIST;

  insuranceTypeOptions: ButtonToggleOption[] = [
    {
      icon: "briefcase.svg",
      iconAlt: "Professional Liability icon",
      title: "Professional Liability",
      detail: "Erros & Omissions (E&O insurance)",
    },
    {
      icon: "cloud-rain.svg",
      iconAlt: "General Liability icon",
      title: "General Liability",
      detail: "Help mitigate against loss (CGL insurance)",
    },
    {
      icon: "package.svg",
      iconAlt: "Business Owner’s Policy icon",
      title: "Business Owner’s Policy",
      detail: "The complete package (BOP)",
    },
    {
      icon: "wifi.svg",
      iconAlt: "Cyber icon",
      title: "Cyber",
      detail: "Internet-based risks (CLIC)",
    },
  ];

  designOwnershipOptions: ButtonToggleOption[] = [
    {
      icon: "droplet.svg",
      iconAlt: "Yes icon",
      title: "Yes",
      detail: "We do designs in-house",
    },
    {
      icon: "airplay.svg",
      iconAlt: "No icon",
      title: "No",
      detail: "We’re gonna need some assistance",
    },
  ];

  coverageOptions: ButtonToggleOption[] = [
    {
      icon: "thumbs-up.svg",
      iconAlt: "Yes icon",
      title: "Yes",
      detail: "",
    },
    {
      icon: "thumbs-down.svg",
      iconAlt: "No icon",
      title: "No",
      detail: "",
    },
  ];

  insuranceSearchForm: FormGroup = this.formBuilder.group({
    insuranceType: ["", Validators.required],
    businessName: ["", Validators.required],
    phoneNumber: ["", Validators.required],
    state: ["", Validators.required],
    designOwnership: ["", Validators.required],
    includeBuildingCoverage: ["", Validators.required],
    businessStartDate: ["", Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private stateService: StateService
  ) {}

  ngOnInit(): void {
    let urlStepNumber = +this.activatedRoute.snapshot.params.step;
    this.currentStepNumber =
      urlStepNumber > 7 || urlStepNumber < 1 ? 1 : urlStepNumber;
  }

  goToNextStep() {
    if (this.currentStepNumber >= 7) {
      return;
    }

    this.currentStepNumber = +this.currentStepNumber + 1;
  }

  goToPreviousStep() {
    this.currentStepNumber = +this.currentStepNumber - 1;
  }

  setInsuranceType(insuranceType: ButtonToggleOption) {
    this.insuranceSearchForm.controls.insuranceType.setValue(
      insuranceType.title
    );
    this.goToNextStep();
  }

  selectedOwnershipOption(ownershipOption: ButtonToggleOption) {
    this.insuranceSearchForm.controls.designOwnership.setValue(
      ownershipOption.title
    );
    this.goToNextStep();
  }

  selectedIncludeBusinessCoverage(includeBuildingCoverage: ButtonToggleOption) {
    this.insuranceSearchForm.controls.includeBuildingCoverage.setValue(
      includeBuildingCoverage.title
    );
    this.goToNextStep();
  }

  getQuotes() {
    this.stateService.setInsuranceRequest(this.insuranceSearchForm.value);
    this.router.navigate(["", { outlets: { modal: ["modal", "results"] } }]);
  }
}
