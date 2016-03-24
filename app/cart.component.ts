import { Component } from 'angular2/core';
import { AlbumComponent } from './album.component';
import { Album } from './album.model';
import { ShoppingCartPipe } from './cart.pipe';

@Component({
  selector: 'shopping-cart',
  inputs: ['albumList'],
  directives: [AlbumComponent],
  pipes: [ShoppingCartPipe],
  template:`
  <div class="well">
  <h4>Shopping Cart</h4>
  <album-display *ngFor="#currentAlbum of albumList
  | cart:filterCart"
  [album]="currentAlbum">
  </album-display>
  </div>
  `
})

export class CartComponent {
  public albumList: Album[];
  public filterCart: string;
}
