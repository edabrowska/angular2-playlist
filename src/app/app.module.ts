import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PlayListsComponent } from './play-lists/play-lists.component';
import { ContentCardComponent } from './play-lists/content-card.component';
import { PlaylistFormComponent } from './play-lists/playlist-form.component';
import { PlaylistsListComponent } from './play-lists/playlists-list.component';
import { PlaylistDetailComponent } from './play-lists/playlist-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayListsComponent,
    ContentCardComponent,
    PlaylistFormComponent,
    PlaylistsListComponent,
    PlaylistDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
