import { Component, OnInit, Inject } from '@angular/core';
import { PlaylistsService } from './playlists.service';

@Component({
  selector: 'app-play-lists',
  templateUrl: './play-lists.component.html',
  styleUrls: ['./play-lists.component.css']
})
export class PlayListsComponent implements OnInit {


//(private/public/? pole klasy playlistService:typ wstrzykiwanego obiektu)
//ang sam doda pole klasy playlistService + sam przypisuje ten obiekt to this
  constructor(private playlistsService:PlaylistsService) {

    
  }

//to jest teraz przekazywana w service
  playlists = [  ]

//tutaj kod zostanie wykonany dopiero kiedy komponent zostanie 'zamontowany' na stronie
  ngOnInit() {
    this.playlists = this.playlistsService.getPlaylists()
//do obiektu, gdy będzie tworzył komponent niech umieści w nim playlistsService danego typu - pobieranie danych z usługi
  }

  size = 1.2;

  selected = null;

  edited = {  }

  mode = "none"

  select(playlist){
  	if(playlist !== this.selected)
  	this.mode = "selected"
  	this.selected = playlist;
  }

  edit(playlist){
  	this.mode = "edit";
  	this.edited = Object.assign({},playlist);
  	this.selected = playlist;
  }

  createNew(){
  	//service za nas tworzy tutaj playlist, a komponent pobiera dane
    let newPlaylist = this.playlistsService.createPlaylist();
  	this.mode = "edit";
  	this.selected = newPlaylist;
  	this.edited = newPlaylist;
    //przekazuję do formularza obiekt newPlaylists
  }

  getPlaylistStyle(playlist){
  	return {
  		borderBottomColor: playlist.color
  	}
  }

  save(playlist){
  	this.playlistsService.savePlaylist(playlist);
  	
  }

  

}
//tutaj tylko wyświetlanie playlisty, formularza; tryby: edited / selected / none