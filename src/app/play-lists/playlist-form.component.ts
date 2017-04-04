import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-playlist-form',
  template: `

          <div>
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
                <button class="btn btn-success float-xs-right" (click)="save(playlist)">Save</button>
              </div>
          </div>  

  `,
  styles: []
})
export class PlaylistFormComponent implements OnInit {

  @Input()
  playlist;


  @Output('saved')
  onSave = new EventEmitter();

  save(playlist){
    this.onSave.emit(playlist);
  }

  constructor() { }

  ngOnInit() {
  }

}
