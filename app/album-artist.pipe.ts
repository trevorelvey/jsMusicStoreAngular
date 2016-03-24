import { Pipe, PipeTransform } from 'angular2/core';
import { Album } from './album.model.ts';

@Pipe({
  name: "artist",
  pure: false
})

export class AlbumArtistPipe implements PipeTransform {
  transform(input: Album[], args) {
    var desiredArtist = args[0];
    if(desiredArtist === "Prince") {
      return input.filter((album) => {
        return album.artist === desiredArtist;
      });
    } else if(desiredArtist === "Diiv") {
      return input.filter((album) => {
        return album.artist === desiredArtist;
      });
    } else if (desiredArtist === "Men Without Hats") {
      return input.filter((album) => {
        return album.artist === desiredArtist;
      });
    } else if (desiredArtist === "Men at Work") {
      return input.filter((album) => {
        return album.artist === desiredArtist;
      });
    } else if (desiredArtist === "Tracy Chapman") {
      return input.filter((album) => {
        return album.artist === desiredArtist;
      });
    } else if (desiredArtist === "The War on Drugs") {
      return input.filter((album) => {
        return album.artist === desiredArtist;
      });
    } else if (desiredArtist === "Joy Division") {
      return input.filter((album) => {
        return album.artist === desiredArtist;
      });
    }  else if (desiredArtist === "Talking Heads") {
      return input.filter((album) => {
        return album.artist === desiredArtist;
      });
    }  else if (desiredArtist === "A Tribe Called Quest") {
      return input.filter((album) => {
        return album.artist === desiredArtist;
      });
    } else {
      return input;
    }
  }
}
