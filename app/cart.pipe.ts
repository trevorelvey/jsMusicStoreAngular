import { Pipe, PipeTransform } from 'angular2/core';
import { Album } from './album.model.ts';

@Pipe({
  name: "cart",
  pure: false
})

export class ShoppingCartPipe implements PipeTransform {
  transform(input: Album[], args) {
    var desiredCartState = args[0];
      return input.filter((album) => {
        return album.artist === desiredCartState;
    });
  }
}
