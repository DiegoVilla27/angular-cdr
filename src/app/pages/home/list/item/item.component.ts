import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DoCheck,
  OnInit
} from "@angular/core";

// If you need to propagate changes through the tree, you can use this._cdr.markForCheck() method. Otherwise, changes will not be propagated

@Component({
  selector: "cdr-item",
  standalone: true,
  imports: [],
  templateUrl: "./item.component.html",
  styleUrl: "./item.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemComponent implements OnInit, DoCheck {
  detect: number = 0;
  click: number = 0;

  constructor(private _cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    setTimeout(() => {
      this._cdr.markForCheck();
    }, 5000);
  }

  ngDoCheck(): void {
    this.detect++;
  }

  submit(): void {
    this.click++;
  }
}
