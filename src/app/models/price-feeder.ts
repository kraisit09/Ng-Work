import { Observable } from 'rxjs';

export abstract class PriceFeeder {
  public abstract feeder(): Observable<number>;
}
