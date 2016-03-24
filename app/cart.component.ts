import { Component } from 'angular2/core';
import { AlbumComponent } from './album.component';
import { Album } from './album.model';

@Component({
  selector: 'shopping-cart',
  inputs: ['albumList'],
  directives: [AlbumComponent],
  template:`
  <div class="well">
  <h3>Shopping Cart</h3>
  </div>
  `
})

export class CartComponent {
  public albumList: Album[];

}
