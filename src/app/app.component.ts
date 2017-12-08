import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app'
  public opened: boolean = true
  public mode: object
  public sidenavItems: object

  constructor() {
    this.mode = {
      mode: 'Over'
    }
    this.sidenavItems = [
      {
        icon: 'home',
        title: 'Main',
        route: '/'
      },
      {
        icon: 'playlist_add_check',
        title: 'Words',
        route: 'words'
      }
      // {
      //   icon: 'bubble_chart',
      //   title: 'Articles',
      //   route: 'articles'
      // }
    ]
  }
}
