import { ChangeDetectionStrategy, Component, DoCheck } from "@angular/core";

@Component({
  selector: "cdr-search",
  standalone: true,
  imports: [],
  templateUrl: "./search.component.html",
  styleUrl: "./search.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements DoCheck {
  detect: number = 0;
  click: number = 0;

  ngDoCheck(): void {
    this.detect++;
  }

  submit(): void {
    this.click++;
  }
}
