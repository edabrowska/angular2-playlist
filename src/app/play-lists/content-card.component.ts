import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content-card',
  template: `
    <div class="card" style="width: 20rem;">
      <div class="card-block">
        <h4 class="card-title">{{ title }}</h4>
        <p class="card-text">{{ text }}</p>
      </div>   
     </div>
  `,
  // inputs:[
  //   'title', 
  //   'text: content'
  // ],
  styles: [`
    h4{
      color: #bf0d3e;
    }
  `]
})
export class ContentCardComponent implements OnInit {

  @Input()
  title = '';

  @Input('content')
  text = '';

  constructor() { }

  ngOnInit() {
  }

}
