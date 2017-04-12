import { Component, OnInit } from '@angular/core';
import { MusicSearchService } from './music-search.service';

@Component({
  selector: 'app-album-list',
  template: `
  	<div class="card-deck card-deck-justify">
	  	<app-album-card [album]="album" class="card" *ngFor="let album of albums"></app-album-card>
	  </div>
  `,
  styles: [`
    .card-deck-justify{
      justify-content: space-between;
    }
  `]
})
export class AlbumListComponent implements OnInit {

	albums = [];

  constructor(private musicSearch: MusicSearchService) { }


//komponent jak się załaduje to załaduje się serwis z construktora, to przy inicjalizacji komponentu zostanie wykonana metoda getAlbums i zgłoszony będzie callback. czyli funkcja się wykona gdy albumy zostaną pbrane z serwera
  ngOnInit() {
  	this.musicSearch.getAlbumsStream().subscribe((albums)=>{
      this.albums = albums;
    })

  }

}
