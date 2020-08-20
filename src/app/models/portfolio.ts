import { Order } from './order';
import { OrderSide } from './order-side';
import * as _ from 'lodash';
export class Portfolio {
  public initialCash = 0;
  public name = 'Portfolio';
  private _orders: Order[] = [];

  public get orders(): readonly Order[] {
    return this._orders;
  }

  public get balanceTHB() {
    let result = this.initialCash;
    // 1.
    for (let i = 0; i < this.orders.length; i++) {
      const o = this.orders[i];
      if (o.side === OrderSide.Buy) {
        result -= o.thaiBaht;
      } else {
        result += o.thaiBaht;
      }
    }

    // 2.
    // this.orders.forEach((o) => {
    //   if (o.side === OrderSide.Buy) {
    //     result -= o.thaiBaht;
    //   } else {
    //     result += o.thaiBaht;
    //   }
    // });

    // 3.
    // for (const o of this.orders) {
    //   if (o.side === OrderSide.Buy) {
    //     result -= o.thaiBaht;
    //   } else {
    //     result += o.thaiBaht;
    //   }
    // }

    // 4.
    // result = _.sumBy(this.orders, (o) => {
    //   if (o.side === OrderSide.Buy) {
    //     return -o.thaiBaht;
    //   } else {
    //     return o.thaiBaht;
    //   }
    // });

    return result;
  }
  public get balanceBTC() {
    let result = 0;
    for (let i = 0; i < this.orders.length; i++) {
      const o = this.orders[i];
      if (o.side === OrderSide.Buy) {
        result += o.volumeBTC;
      } else {
        result -= o.volumeBTC;
      }
    }
    return result;
  }

  public buy(id: number, priceBTC: number, volumeBTC: number) {
    const o = new Order();
    o.id = id;
    o.side = OrderSide.Buy;
    o.priceBTC = priceBTC;
    o.volumeBTC = volumeBTC;

    if (o.thaiBaht > this.balanceTHB) {
      throw 'Thai Baht is not enough to buy';
    }

    this._orders.push(o);
  }

  public sell(id: number, priceBTC: number, volumeBTC: number) {
    if (volumeBTC > this.balanceBTC) {
      throw 'Bitcoin is not enough to sell';
    }

    const o = new Order();
    o.id = id;
    o.side = OrderSide.Sell;
    o.priceBTC = priceBTC;
    o.volumeBTC = volumeBTC;

    this._orders.push(o);
  }

  public remove(item: Order) {
    // const n = this.orders.indexOf(item);
    // this.orders.splice(n, 1);
    this._orders = _.without(this.orders, item);
  }
}
