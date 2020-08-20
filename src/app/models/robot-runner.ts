import { BitkubPriceFeeder } from './bitkub-price-feeder';
import { BacktestPriceFeeder } from './backtest-price-feeder';
import { Robot } from './robot';
import { PriceFeeder } from './price-feeder';
import { Observable } from 'rxjs';

export class RobotRunner {
  private feeder: PriceFeeder;
  private robot: Robot;

  constructor() {
    this.feeder = new BacktestPriceFeeder();
    //this.feeder = new BitkubPriceFeeder();

    this.robot = new Robot();
  }

  public start() {
    this.feeder.feeder().subscribe((p) => {
      const s = this.robot.process(p);
      if (s !== '') console.log(s);
    });
  }
}
