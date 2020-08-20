export class Person {
  constructor(public weight = 0, public height = 0) {}

  public get bmi() {
    return this.weight / (this.height / 100) ** 2;
  }

  public get category() {
    const currBMI = this.bmi;

    if (currBMI > 25) {
      return 'Over weight';
    } else if (currBMI >= 18.5 && currBMI <= 25.0) {
      return 'Normal';
    } else if (currBMI < 18.5) {
      return 'Under weight';
    }
  }
}
