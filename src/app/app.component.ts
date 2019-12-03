import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gts';

  videoLoaded(e: Event) {
    console.log('video loaded', e);
  }
}
