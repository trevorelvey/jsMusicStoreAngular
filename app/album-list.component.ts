import { Component } from 'angular2/core';
import { AlbumComponent } from './album.component';
import { Album } from './album.model';
import { AlbumGenrePipe } from './album-genre.pipe';

@Component({
  selector: 'album-list',
  pipes: [AlbumGenrePipe],
  inputs: ['albumList'],
  directives: [AlbumComponent],
  template:`
  <select class="form-control" (change)="onChange($event.target.value)">
    <option value="all" selected="selected">All Albums</option>
    <option value="Funk">Funk</option>
    <option value="Surf Rock">Surf Rock</option>
    <option value="New Wave">New Wave</option>
    <option value="Reggae Rock">Reggae Rock</option>
    <option value="Folk">Folk</option>
    <option value="Indie Rock">Indie Rock</option>
    <option value="Post Punk">Post Punk</option>
    <option value="Hip-Hop">Hip-Hop</option>
  </select>
  <album-display *ngFor="#currentAlbum of albumList | genre:filterGenre"
  [album]="currentAlbum">
  </album-display>
  `
})
export class AlbumListComponent {
  public filterGenre: string;
  public albumList: Album[];
  onChange(filterOption) {
    this.filterGenre = filterOption;
  }
}
