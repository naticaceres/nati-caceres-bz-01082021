import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-find-policy-modal",
  templateUrl: "./find-policy-modal.component.html",
  styleUrls: ["./find-policy-modal.component.scss"],
})
export class FindPolicyModalComponent implements OnInit {
  isIntro = true;
  constructor() {}

  ngOnInit(): void {
    this.isIntro = true;
  }
}
