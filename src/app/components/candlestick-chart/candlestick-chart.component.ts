import { Candlestick } from './../../models/candlestick';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candlestick-chart',
  templateUrl: './candlestick-chart.component.html',
  styleUrls: ['./candlestick-chart.component.css'],
})
export class CandlestickChartComponent implements OnInit {
  public candle: Candlestick;

  constructor() {}

  ngOnInit(): void {
    this.candle = new Candlestick(499, 500);
  }

  public clsForCandle() {
    return { g: this.candle.color === 'green', r: this.candle.color === 'red' };
  }
}
