import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-intro",
  templateUrl: "./intro.component.html",
  styleUrls: ["./intro.component.scss"],
})
export class IntroComponent implements OnInit {
  @Output() introAccepted = new EventEmitter<boolean>();

  constructor(private router: Router) {}

  ngOnInit(): void {}

  acceptIntro() {
    this.router.navigate([
      "",
      { outlets: { modal: ["modal", "find-policy-form", "1"] } },
    ]);
  }
}
