import { Song } from './song';
export class Album {
  constructor(public name = '', public songs: Song[] = []) {}
}
