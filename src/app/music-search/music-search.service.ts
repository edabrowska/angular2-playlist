import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
//subject jest strumieniem ktory mozna obserwowac i zmieniac
//tutaj wyniki wysylamy do obiektu subject
import { Observable, Subject } from 'rxjs';

@Injectable()
export class MusicSearchService {

  albums = [];

	albumsStream = new Subject();

  constructor(private http: Http) {
		this.search('Batman');
  }

  //metoda, która będzie zwracala strumień przygotowywany przez nas
	//zamiana subject na observable zeby inny komponent nie mogl zapipisac do tego obiektu
  getAlbumsStream() {
		return Observable
		.from(this.albumsStream)
		.startWith(this.albums);
  }

  search(query) {
      let url = `https://api.spotify.com/v1/search?type=album&market=PL&query=${query}`;

      this.http.get(url).map((response: Response) => {
	  		let data = response.json();
	  		return data.albums.items;
			}).do(albums => {this.albums = albums})
			.subscribe(albums => {
					this.albumsStream.next(this.albums);
			})

  }
//za kazdym razem kiedy komponent wykona metode search, nasza usluga korzystajac z medoty
//mext umiesci kolejny element w strumieniu albumsStream, opublikuje kolejna liste
//albumow i kazdy komponent (album-list) moze zasubskrybowac sie na albumStream
//i wyswietlac wyniki

  // getAlbums(callback){
  // 	let query = 'batman';
  // 	this.search(query, callback);
  // }

}
