import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-playlist-form',
  template: `
      <div class="card" style="width: 20rem;">
          <div class="card-block">
            <h4 class="card-title">Playlist</h4>
            <p class="card-text">Description</p>
          </div>
          <div class="card-block">
              <div class="form-group">
                <label>Name:</label>
                <input type="text" [(ngModel)]="playlist.name" class="form-control">
              </div>
              <div class="form-group">
                <label>Songs:</label>
                <input type="text" [value]="playlist.tracks + ' songs' " disabled class="form-control">
              </div>
              <div class="form-group">
                <label>Color:</label>
                <input type="color" [(ngModel)]="playlist.color">
              </div>
              <div class="form-group">
                <label>
                <input type="checkbox" [(ngModel)]="playlist.favourite">Favourite</label>
              </div>
              <div class="form-group">
                <button class="btn btn-success float-xs-right" (click)="save($event)">Save</button>
              </div>
          </div>  
        </div>
  `,
  styles: []
})
export class PlaylistFormComponent implements OnInit {

  @Input()
  playlist;

  constructor() { }

  ngOnInit() {
  }

}
