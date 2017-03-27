import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  playlist = {
	name: 'The best of',
	tracks: 23,
	color: '#f6546a',
	favourite: true
  }

  save(event){
  	console.log('Saved', event)
  }

}

