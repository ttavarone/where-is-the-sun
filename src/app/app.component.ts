import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  title = 'Where is the Sun?';

  sunny = true;

  weatherUrl:string;

  changeSun(): void {
    this.sunny = !this.sunny;
  }
}
