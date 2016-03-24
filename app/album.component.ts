import { Component } from 'angular2/core';
import { Album } from './album.model';

@Component({
  selector: 'album-display',
  inputs: ['album'],
  template:`
  <div class="record">
    <h3 class ="album-name">{{ album.name }}</h3>
    <p class="artist-name">by {{ album.artist }}</p>
    <p class="genre-name">{{ album.genre }}. <span class="price">\${{ album.price }}</span></p>
    <button class="btn btn-success btn-sm" (click)="addToCart()">Add to cart.</button>
  </div>
  `
})
export class AlbumComponent {
  public album: Album;
  addToCart(): void {
    this.album.inCart = true;
  }
}
