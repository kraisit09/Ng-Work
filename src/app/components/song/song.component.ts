import { Song } from './../../models/song';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css'],
})
export class SongComponent implements OnInit {
  @Input() public song: Song;

  constructor() {}

  ngOnInit(): void {}
}
