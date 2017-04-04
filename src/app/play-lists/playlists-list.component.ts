import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-playlists-list',
  template: `
      <table class="table table-striped">
        <thead>
          <tr>
            <th> # </th>
            <th> Name </th>
            <th> Songs </th>
            <th> Favourite </th>
          </tr>
        </thead>
        <tbody>
          <tr class="playlist-row" *ngFor="let playlist of playlists; let i = index"
          [ngClass]="{'table-active': selected == playlist}" 
          [ngStyle]="{ borderBottomColor:playlist.color }"
          [style.fontSize.em]="size" 
          (click)="select(playlist)">
            <td> {{ i + 1 }} </td>
            <td> {{ playlist.name }} </td>
            <td class="text-center"> {{ playlist.tracks}} </td>
            <td class="text-center">
              <label> 
                <input type="checkbox" [(ngModel)]="playlist.favourite" (click)="$event.stopPropagation();">
              </label>  
            </td>
          </tr>
        </tbody>
      </table>
  `,
  styles: [`
    .playlist-row{
      border-bottom: 2px solid transparent;
    }
  `]
})
export class PlaylistsListComponent implements OnInit {

  @Output('selected')
  onSelected = new EventEmitter();

  @Input()
  playlists;

  @Input()
  selected;

  select(playlist){
    this.onSelected.emit(playlist);
  }

  constructor() { }

  ngOnInit() {
  }

}
