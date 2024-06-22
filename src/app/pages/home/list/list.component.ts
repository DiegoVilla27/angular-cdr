import { ChangeDetectionStrategy, Component, DoCheck } from "@angular/core";
import { ItemComponent } from "./item/item.component";

@Component({
  selector: "cdr-list",
  standalone: true,
  imports: [ItemComponent],
  templateUrl: "./list.component.html",
  styleUrl: "./list.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements DoCheck {
  detect: number = 0;
  click: number = 0;

  ngDoCheck(): void {
    this.detect++;
  }

  submit(): void {
    this.click++;
  }
}
