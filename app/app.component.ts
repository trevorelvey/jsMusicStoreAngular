import { Component } from 'angular2/core';
import { AlbumListComponent } from './album-list.component';
import { CartComponent } from './cart.component';
import { Album } from './album.model';

@Component({
  selector: 'my-app',
  directives: [AlbumListComponent, CartComponent],
  template: `
  <div class="container">
    <h1>We Sell Music</h1>
    <div class="row">
      <div class="col-sm-8">
        <album-list
          [albumList]="albums">
        </album-list>
      </div>
      <div class="col-sm-4">
        <shopping-cart
          [albumList]="albums">
        </shopping-cart>
      </div>
    </div>
  </div>
  `
})

export class AppComponent {
  public albums: Album[];
  constructor(){
    this.albums = [
      new Album("Purple Rain", "Prince", 12, "Funk", 0),
      new Album("Is the Is Are", "Diiv", 15, "Surf Rock", 1),
      new Album("Safety Dance", "Men Without Hats", 6, "New Wave", 2),
      new Album("Business as Usual", "Men at Work", 8, "Reggae Rock", 3),
      new Album("Tracy Chapman", "Tracy Chapman", 240, "Folk", 4),
      new Album("Lost in the Dream", "The War on Drugs", 12, "Indie Rock", 5),
      new Album("Unknown Pleasures", "Joy Division", 16, "Post Punk", 6),
      new Album("Closer", "Joy Division", 16, "New Wave", 7),
      new Album("Remain in Light", "Talking Heads", 15, "New Wave", 8),
      new Album("Speaking in Tongues", "Talking Heads", 16, "New Wave", 9),
      new Album("Naked", "Talking Heads", 15, "New Wave", 10),
      new Album("Beats, Rhymes and Life", "A Tribe Called Quest", 14, "Hip-Hop", 11),
      new Album("The Love Movement", "A Tribe Called Quest", 18, "Hip-Hop", 12)
    ]
  }
}
