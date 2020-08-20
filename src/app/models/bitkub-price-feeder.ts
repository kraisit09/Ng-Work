import { ajax, AjaxResponse } from 'rxjs/ajax';
import { PriceFeeder } from './price-feeder';
import { Observable, from, timer, Subject } from 'rxjs';
import { MarketTicker } from './market-ticker';

export class BitkubPriceFeeder extends PriceFeeder {
  private url = 'https://api.bitkub.com/api/market/ticker?sym=THB_BTC';
  private subject: Subject<number>;

  constructor() {
    super();
    this.subject = new Subject<number>();
  }

  public feeder(): Observable<number> {
    timer(5 * 1000).subscribe((n) => {
      ajax(this.url).subscribe((res: AjaxResponse) => {
        const ticker = <MarketTicker>res.response;
        this.subject.next(ticker.THB_BTC.last);
      });
    });
    return this.subject;
  }
}
