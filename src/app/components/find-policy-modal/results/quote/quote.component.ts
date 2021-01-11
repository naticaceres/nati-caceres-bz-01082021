import { Component, Input, OnInit } from "@angular/core";
import { Quote } from "./quote.model";

@Component({
  selector: "app-quote",
  templateUrl: "./quote.component.html",
  styleUrls: ["./quote.component.scss"],
})
export class QuoteComponent implements OnInit {
  @Input() quoteList: Quote[];

  constructor() {}

  ngOnInit(): void {}

  getRatingPercentage(rating: number): string {
    let percentage = (rating / 5) * 100;
    let gradient = `linear-gradient(to right, #0074D9 ${percentage}%, #C4C4C4 ${percentage}%)`;

    return gradient;
  }
}
