import { Component, DoCheck } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "cdr-root",
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss"
})
export class AppComponent implements DoCheck {
  title = "angular-cdr";
  detect: number = 0;
  click: number = 0;

  ngDoCheck(): void {
    this.detect++;
  }

  submit(): void {
    this.click++;
  }
}
