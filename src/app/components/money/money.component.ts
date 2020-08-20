import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-money',
  templateUrl: './money.component.html',
  styleUrls: ['./money.component.css'],
})
export class MoneyComponent implements OnInit {
  @Input() public value: number = 0;
  @Input() public decimalPlaces = 2;
  @Input() public bold: boolean = false;
  @Input() public symbol: string = '$';

  constructor() {}

  ngOnInit(): void {}
  public numberFormat() {
    return `1.${this.decimalPlaces}-${this.decimalPlaces}`;
  }
}
