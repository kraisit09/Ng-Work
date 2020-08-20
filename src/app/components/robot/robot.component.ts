import { RobotRunner } from './../../models/robot-runner';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-robot',
  templateUrl: './robot.component.html',
  styleUrls: ['./robot.component.css'],
})
export class RobotComponent implements OnInit {
  public runner: RobotRunner;

  constructor() {}

  ngOnInit() {
    this.runner = new RobotRunner();
    this.runner.start();
  }
}
