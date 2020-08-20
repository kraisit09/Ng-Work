export class Robot {
  private previous = 0;
  private direction: 'up' | 'down' | 'unknown' = 'unknown';

  public process(price: number): string {
    if (this.previous == 0) {
      this.previous = price;
      return '';
    }

    if (this.direction != 'down' && price - this.previous >= 2.0) {
      this.previous = price;
      this.direction = 'up';
      return `LF @${price.toFixed(1)} x 1`;
    }

    if (this.direction != 'down' && this.previous - price >= 5.0) {
      this.previous = price;
      this.direction = 'down';
      return `SF @${price.toFixed(1)} x 1`;
    }

    if (this.direction != 'up' && this.previous - price >= 2.0) {
      this.previous = price;
      this.direction = 'down';
      return `SF @${price.toFixed(1)} x 1`;
    }

    if (this.direction != 'up' && price - this.previous >= 5.0) {
      this.previous = price;
      this.direction = 'up';
      return `LF @${price.toFixed(1)} x 1`;
    }

    return '';
  }
}
