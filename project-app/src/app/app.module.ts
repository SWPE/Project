import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from "./components/app/app.component";
import { MainPageComponent } from './components/mainPage/mainPage.component';
import { LecturesComponent } from "./components/lectures/lectures.component";
import { HomeworkComponent } from "./components/homework/homework.component";
import { RouterModule, Routes } from "@angular/router";
const appRoutes: Routes = [
	{path:"", component:MainPageComponent},
	{path:"lectures", component:LecturesComponent},
	{path:"homework", component:HomeworkComponent}
];
@NgModule({
  declarations: [
	AppComponent,
    	MainPageComponent,
	LecturesComponent,
	HomeworkComponent
  ],
  imports: [
	BrowserModule,
	RouterModule.forRoot(
	appRoutes,
	{enableTracing: true}
)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
