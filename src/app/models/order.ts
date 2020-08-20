import { OrderSide } from './order-side';
export class Order {
  public id = 0;
  public side: OrderSide;
  public priceBTC = 0; // 300,000 THB/BTC
  public volumeBTC = 0; // 0.1 BTC

  public get thaiBaht() {
    return this.priceBTC * this.volumeBTC;
  }
}
