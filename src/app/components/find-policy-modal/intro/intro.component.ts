import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-intro",
  templateUrl: "./intro.component.html",
  styleUrls: ["./intro.component.scss"],
})
export class IntroComponent implements OnInit {
  @Output() introAccepted = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}
}
