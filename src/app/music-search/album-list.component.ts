import { Component, OnInit, NO_ERRORS_SCHEMA } from '@angular/core';
import { MusicSearchService } from './music-search.service';

@Component({
  selector: 'app-album-list',
  template: `
    <div class="card-deck card-deck-justify">
      <album-card [album]="album" class="card"
        *ngFor="let album of albums | async"></album-card>
    </div>
  `,
  styles: [`
    .card-deck-justify{
      justify-content: space-between;
    }
  `]
})
export class AlbumListComponent implements OnInit {
  albums;

  constructor(private musicSearch: MusicSearchService) {}

  ngOnInit(){
    this.albums = this.musicSearch.getAlbumsStream()
  }

}
