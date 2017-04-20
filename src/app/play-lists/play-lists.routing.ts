import { RouterModule, Routes } from '@angular/router';
import { PlayListsComponent } from './play-lists.component';

const routesConfig:Routes = [
  {path:'playlist', component: PlayListsComponent}
]

export const routerModule = RouterModule.forChild(routesConfig)
