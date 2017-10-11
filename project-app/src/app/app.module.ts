import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MainPageComponent } from './components/mainPage/mainPage.component';

@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [MainPageComponent]
})
export class AppModule { }
