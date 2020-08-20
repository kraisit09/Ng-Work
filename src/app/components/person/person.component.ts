import { Person } from './../../models/person';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
})
export class PersonComponent implements OnInit {
  public currPerson: Person;
  public currPeople: Person[];
  constructor() {}

  ngOnInit(): void {
    this.currPerson = new Person(80, 175);
    this.currPeople = [];

    const p1 = new Person(80, 175);
    const p2 = new Person(90, 185);
    const p3 = new Person(100, 195);

    this.currPeople.push(p1, p2, p3);

    console.log(this.currPeople);
  }
}
