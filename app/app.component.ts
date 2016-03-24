import { Component } from 'angular2/core';
import { AlbumListComponent } from './album-list.component';
import { Album } from './album.model';

@Component({
  selector: 'my-app',
  directives: [AlbumListComponent],
  template: `
  <div class="container">
    <h1>We Sell Music</h1>
    <album-list
      [albumList]="albums">
    </album-list>
  </div>
  `
})

export class AppComponent {
  public albums: Album[];
  constructor(){
    this.albums = [
      new Album("Purple Rain", "Prince", 12, "Funk"),
      new Album("Is the Is Are", "Diiv", 15, "Surf Rock"),
      new Album("Safety Dance", "Men Without Hats", 6, "New Wave"),
      new Album("Business as Usual", "Men at Work", 8, "Reggae Rock"),
      new Album("Tracy Chapman", "Tracy Chapman", 240, "Folk"),
      new Album("Lost in the Dream", "The War on Drugs", 12, "Indie Rock"),
      new Album("Unknown Pleasures", "Joy Division", 16, "Post Punk"),
      new Album("Remain in Light", "Talking Heads", 15, "New Wave"),
      new Album("Speaking in Tongues", "Talking Heads", 16, "New Wave"),
      new Album("Naked", "Talking Heads", 15, "New Wave"),
      new Album("Beats, Rhymes and Life", "A Tribe Called Quest", 14, "Hip-Hop"),
      new Album("The Love Movement", "A Tribe Called Quest", 18, "Hip-Hop")
    ]
  }
}
