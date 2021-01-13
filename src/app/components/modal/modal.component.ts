import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { slideInAnimation } from "src/app/route-animation";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.scss"],
  animations: [slideInAnimation],
})
export class ModalComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  closeModal() {
    this.router.navigateByUrl("home");
  }
}
