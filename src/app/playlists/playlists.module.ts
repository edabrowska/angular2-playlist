import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PlayListsComponent } from '../play-lists/play-lists.component';
import { ContentCardComponent } from '../play-lists/content-card.component';
import { PlaylistFormComponent } from '../play-lists/playlist-form.component';
import { PlaylistsListComponent } from '../play-lists/playlists-list.component';
import { PlaylistDetailComponent } from '../play-lists/playlist-detail.component';
import { PlaylistsService } from '../play-lists/playlists.service';

import playlistsData from './playlists.data';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
 //komponenty: wyświetlają treści i komunikujądo użytkownika i zbierają akcje
  	PlayListsComponent,
    ContentCardComponent,
    PlaylistFormComponent,
    PlaylistsListComponent,
    PlaylistDetailComponent
  ],
 //tylko ten komponent, który exportujemy będzie i musi być dostępny
  exports: [
  	PlayListsComponent
  ],
  providers: [
	  //pozwala podmienić różne wersje tych samych usług dla wszystkich komponentów w module
	  //	{provide: PlaylistsService, useClass: PlaylistsService}
	  PlaylistsService,
	  //zapis skrócony powyższego

	  {provide: 'PlaylistsData', useValue: playlistsData},
	  //z małej litery, bo to tablica a nie clasa

	  // {provide: 'PlaylistsData', useFactory: (data) => {
	  // 	data.push({
	  // 		id: 123,
	  // 		name: "Test",
	  // 		color: '#000000',
	  // 		favourite: false,
	  // 		tracks: 2
	  // 	})
	  // 	return data; skrot od dependencies
	  // }, deps: ['PlaylistsExampleData']}
  ]
})
export class PlaylistsModule { }

//moduł izoluje wyciek elementów i sam zawiera wszystkie dla siebie potrzebne rzeczy
