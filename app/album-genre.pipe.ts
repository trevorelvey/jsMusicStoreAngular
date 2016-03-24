import { Pipe, PipeTransform } from 'angular2/core';
import { Album } from './album.model.ts';

@Pipe({
  name: "genre",
  pure: false
})

export class AlbumGenrePipe implements PipeTransform {
  transform(input: Album[], args) {
    var desiredGenre = args[0];
    if(desiredGenre === "Funk") {
      return input.filter((album) => {
        return album.genre === desiredGenre;
      });
    } else if(desiredGenre === "Surf Rock") {
      return input.filter((album) => {
        return album.genre === desiredGenre;
      });
    } else if (desiredGenre === "New Wave") {
      return input.filter((album) => {
        return album.genre === desiredGenre;
      });
    } else if (desiredGenre === "Reggae Rock") {
      return input.filter((album) => {
        return album.genre === desiredGenre;
      });
    } else if (desiredGenre === "Folk") {
      return input.filter((album) => {
        return album.genre === desiredGenre;
      });
    } else if (desiredGenre === "Indie Rock") {
      return input.filter((album) => {
        return album.genre === desiredGenre;
      });
    } else if (desiredGenre === "Post Punk") {
      return input.filter((album) => {
        return album.genre === desiredGenre;
      });
    }  else if (desiredGenre === "Hip-Hop") {
      return input.filter((album) => {
        return album.genre === desiredGenre;
      });
    } else {
      return input;
    }
  }
}
