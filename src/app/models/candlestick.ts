export class Candlestick {
  constructor(public open = 0, public close = 0) {}

  public get color() {
    if (this.open < this.close) return 'green';
    else return 'red';
  }
}
