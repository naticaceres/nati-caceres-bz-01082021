import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { ButtonToggleOption } from "./button-toggle-option.model";

@Component({
  selector: "app-button-toggle",
  templateUrl: "./button-toggle.component.html",
  styleUrls: ["./button-toggle.component.scss"],
})
export class ButtonToggleComponent implements OnInit {
  @Input() toggleOptions: ButtonToggleOption[];
  @Input() selectedOptionTitle: string;

  @Output() selectedOption = new EventEmitter<ButtonToggleOption>();

  constructor() {}

  ngOnInit(): void {}
}
