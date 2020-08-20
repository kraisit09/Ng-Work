import { Song } from './models/song';
import { Album } from './models/album';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'myapp';
  album = new Album('Pick Me Up');

  constructor() {
    this.album.songs.push(new Song('To live'));
    this.album.songs.push(new Song('Begin Again'));
    this.album.songs.push(new Song('Black Memory'));
  }
}
