import { Component, DoCheck } from "@angular/core";

@Component({
  selector: "cdr-filter",
  standalone: true,
  imports: [],
  templateUrl: "./filter.component.html",
  styleUrl: "./filter.component.scss"
})
export class FilterComponent implements DoCheck {
  detect: number = 0;
  click: number = 0;

  ngDoCheck(): void {
    this.detect++;
  }

  submit(): void {
    this.click++;
  }
}
