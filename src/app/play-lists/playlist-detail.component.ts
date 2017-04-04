import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-playlist-detail',
  template: `
            <p class="card-text">Chosen playlist</p>
            <div class="form-group">
              <button class="btn btn-default float-xs-right" (click)="edit(playlist)">Edit</button>
            </div>
  `,
  styles: []
})
export class PlaylistDetailComponent implements OnInit {

  @Input()
  playlist;

  @Output('editplaylist')
  emitter = new EventEmitter();

  edit(playlist){
    this.emitter.emit(playlist);
  }

  constructor() { }

  ngOnInit() {
  }

}
