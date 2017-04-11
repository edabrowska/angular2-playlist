import { Component, OnInit } from '@angular/core';
import { MusicSearchService } from './music-search.service';

@Component({
  selector: 'app-album-search-form',
  template: `
    <form (ngSubmit)="search(query)">
      <div class="input-group">
        <input type="text" [(ngModel)]="query" class="form-control" placeholder="Key words">
        <span class="input-group-btn">
          <button type="submit" class="btn btn-outline-primary">Search</button>
        </span>
      </div>
    </form>
  `,
  styles: []
})
export class AlbumSearchFormComponent implements OnInit {

  constructor(private musicSearch: MusicSearchService) { }

  search(query){
    this.musicSearch.search(query, (albums) => {
      console.log(albums);
    })
  }

  ngOnInit() {  }

}
