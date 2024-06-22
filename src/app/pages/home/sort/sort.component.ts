import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DoCheck
} from "@angular/core";

// If you need to detect changes through the tree, you can use this._cdr.detectChanges() method. Otherwise, changes will not be detected

@Component({
  selector: "cdr-sort",
  standalone: true,
  imports: [],
  templateUrl: "./sort.component.html",
  styleUrl: "./sort.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SortComponent implements DoCheck {
  detect: number = 0;
  click: number = 0;

  constructor(private _cdr: ChangeDetectorRef) {}

  ngDoCheck(): void {
    this.detect++;
    this._cdr.detectChanges();
  }

  submit(): void {
    this.click++;
  }
}
