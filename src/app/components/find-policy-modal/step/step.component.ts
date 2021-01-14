import {
  AfterContentInit,
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from "@angular/core";

@Component({
  selector: "app-step",
  templateUrl: "./step.component.html",
  styleUrls: ["./step.component.scss"],
})
export class StepComponent implements OnInit, AfterContentInit {
  @Input() stepNumber: number;
  @Input() question: string;
  @Input() isShowOkButton: boolean = true;
  @Input() isOkButtonDisabled: boolean = true;
  @Input() currentStep: number = 1;

  @Output() okClicked = new EventEmitter();

  @ContentChild("autofocus") input: ElementRef;

  constructor() {}
  ngAfterContentInit(): void {
    // this.input.nativeElement.
    // if (!!this.input) {
    //   let check = this.input;
    // }
  }

  ngOnInit(): void {
    // if (!!this.input) {
    //   let check = this.input;
    // }
  }
}
