import { ChangeDetectionStrategy, Component, DoCheck } from "@angular/core";
import { SearchComponent } from "./search/search.component";
import { ListComponent } from "./list/list.component";
import { FilterComponent } from "./filter/filter.component";
import { SortComponent } from "./sort/sort.component";

@Component({
  selector: "cdr-home",
  standalone: true,
  imports: [SearchComponent, FilterComponent, SortComponent, ListComponent],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements DoCheck {
  detect: number = 0;
  click: number = 0;

  ngDoCheck(): void {
    this.detect++;
  }

  submit(): void {
    this.click++;
  }
}
