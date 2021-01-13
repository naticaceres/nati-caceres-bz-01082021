import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-step",
  templateUrl: "./step.component.html",
  styleUrls: ["./step.component.scss"],
})
export class StepComponent implements OnInit {
  @Input() stepNumber: number;
  @Input() question: string;
  @Input() isShowOkButton: boolean = true;
  @Input() isOkButtonDisabled: boolean = true;
  @Input() currentStep: number = 1;

  @Output() okClicked = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
