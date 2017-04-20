import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MusicSearchComponent } from './music-search.component';
import { AlbumListComponent } from './album-list.component';
import { AlbumCardComponent } from './album-card.component';
import { MusicSearchService } from './music-search.service';
import { AlbumSearchFormComponent } from './album-search-form.component';

import { routerModule } from './music-search.routing';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    routerModule
  ],
  declarations: [
  	MusicSearchComponent,
  	AlbumListComponent,
  	AlbumCardComponent,
    AlbumSearchFormComponent
  ],
  exports: [
  	MusicSearchComponent
  ],
  providers: [
  	MusicSearchService
  ],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class MusicSearchModule { }
