/*
 * It's used to route other components through the router-outlet tag in the its html file.
 * Nothing happens here
 * A lot of info about components you're able to find in mainPage.component.ts.
 * Other components are pretty similiar to it, so you'll find only differences being written between mainPage and other components
 * A lot of info about forms can be found in lectureForm, so the rules are the same as with the components
 * */
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
