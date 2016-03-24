import { Component } from 'angular2/core';
import { AlbumComponent } from './album.component';
import { Album } from './album.model';
import { AlbumGenrePipe } from './album-genre.pipe';
import { AlbumArtistPipe } from './album-artist.pipe';

@Component({
  selector: 'album-list',
  pipes: [AlbumGenrePipe, AlbumArtistPipe],
  inputs: ['albumList'],
  directives: [AlbumComponent],
  template:`
  <select class="form-control" (change)="onAlbumChange($event.target.value)">
    <option value="all" selected="selected">All Genres</option>
    <option value="Funk">Funk</option>
    <option value="Surf Rock">Surf Rock</option>
    <option value="New Wave">New Wave</option>
    <option value="Reggae Rock">Reggae Rock</option>
    <option value="Folk">Folk</option>
    <option value="Indie Rock">Indie Rock</option>
    <option value="Post Punk">Post Punk</option>
    <option value="Hip-Hop">Hip-Hop</option>
  </select>
  <br>
  <select class="form-control" (change)="onArtistChange($event.target.value)">
    <option value="all" selected="selected">All Artists</option>
    <option value="Prince">Prince</option>
    <option value="Diiv">Diiv</option>
    <option value="Men Without Hats">Men Without Hats</option>
    <option value="Men at Work">Men at Work</option>
    <option value="Tracy Chapman">Tracy Chapman</option>
    <option value="The War on Drugs">The War on Drugs</option>
    <option value="Joy Division">Joy Division</option>
    <option value="Talking Heads">Talking Heads</option>
    <option value="A Tribe Called Quest">A Tribe Called Quest</option>
  </select>
  <album-display *ngFor="#currentAlbum of albumList
  | genre:filterGenre
  | artist:filterArtist"
  [album]="currentAlbum">
  </album-display>
  `
})
export class AlbumListComponent {
  public filterGenre: string;
  public filterArtist: string;
  public albumList: Album[];
  onAlbumChange(filterOption) {
    this.filterGenre = filterOption;
  }
  onArtistChange(filterOption) {
  this.filterArtist = filterOption;
  }
}
