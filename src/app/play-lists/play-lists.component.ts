import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-play-lists',
  templateUrl: './play-lists.component.html',
  styleUrls: ['./play-lists.component.css']
})
export class PlayListsComponent implements OnInit {

  size = 1.2;

  selected = null;

  edited = {

  }

  mode = "none"

  playlists = [
  	{
		name: 'The best of...',
		tracks: 23,
		color: '#f6546a',
		favourite: true
	},
			
	{
		name: 'Abc...',
		tracks: 2,
		color: '#42f9e7',
		favourite: false
	}
  ]	

  select(playlist){
  	if(playlist !== this.selected)
  	this.mode = "selected"
  	this.selected = playlist;
  }

  edit(playlist){
  	this.mode = "edit";
  	this.edited = playlist;
  	this.selected = playlist;
  }

  createNew(){
  	var newPlaylist = {};
  	this.mode = "edit";
  	this.selected = newPlaylist;
  	this.edited = newPlaylist;
  }

  getPlaylistStyle(playlist){
  	return {
  		borderBottomColor: playlist.color
  	}
  }

  save(event){
  	console.log('Saved', event)
  }

  constructor() { }

  ngOnInit() {
  }

}
