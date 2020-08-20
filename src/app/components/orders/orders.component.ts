import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Order } from './../../models/order';
import { Portfolio } from './../../models/portfolio';
import { Component, OnInit, ElementRef } from '@angular/core';
import { OrderSide } from 'src/app/models/order-side';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  public portfolios: Portfolio[] = [];
  public selectedPortfolios: Portfolio;
  public faTrash = faTrash;

  public tempOrder = new Order();

  constructor() {}

  ngOnInit(): void {
    const p1 = new Portfolio();
    p1.name = 'Portfolio A';
    p1.initialCash = 10_000;
    this.portfolios.push(p1);

    // const o1 = new Order();
    // o1.id = 921001;
    // o1.side = OrderSide.Buy;
    // o1.priceBTC = 300_000;
    // o1.volumeBTC = 0.01;
    //p1.orders.push(o1);

    p1.buy(921001, 300_000, 0.01);
    p1.buy(921001, 300_000, 0.01);
    p1.buy(921002, 350_000, 0.01);

    const p2 = new Portfolio();
    p2.name = 'Portfolio B';
    p2.initialCash = 100_000;
    this.portfolios.push(p2);

    this.selectedPortfolios = this.portfolios[0];
  }

  remove(item: Order) {
    if (!this.selectedPortfolios) return;
    this.selectedPortfolios.remove(item);
  }
  evOnClick(e) {
    try {
      const currType = e.name;
      const currPortf = this.selectedPortfolios;

      if (!currPortf || !currType) {
        return;
      }

      const { id, priceBTC, volumeBTC } = this.tempOrder;

      // update data order
      if (currType === 'buy') {
        currPortf.buy(id, priceBTC, volumeBTC);
      } else if (currType === 'sell') {
        currPortf.sell(id, priceBTC, volumeBTC);
      }
    } catch (error) {
      alert(error);
    }
  }
}
