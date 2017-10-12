import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from "./components/app/app.component";
import { MainPageComponent } from './components/mainPage/mainPage.component';
import { LecturesComponent } from "./components/lectures/lectures.component";
import { HomeworkComponent } from "./components/homework/homework.component";
import { InfoComponent } from "./components/info/info.component";
import { MeetingsComponent } from "./components/meetings/meetings.component";
import { RouterModule, Routes } from "@angular/router";
const appRoutes: Routes = [
	{path:"", component:MainPageComponent},
	{path:"lectures", component:LecturesComponent},
	{path:"homework", component:HomeworkComponent},
	{path:"info", component:InfoComponent},
	{path:"meetings", component:MeetingsComponent}
];
@NgModule({
  declarations: [
	AppComponent,
    	MainPageComponent,
	LecturesComponent,
	HomeworkComponent,
	InfoComponent,
	MeetingsComponent
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
