import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule} from "@angular/common/http";

import { AppComponent } from "./components/app/app.component";
import { MainPageComponent } from './components/mainPage/mainPage.component';
import { LecturesComponent } from "./components/lectures/lectures.component";
import { LecturesFormComponent } from "./components/lectureForm/lecturesForm.component";
import { HomeworkComponent } from "./components/homework/homework.component";
import { HomeworkFormComponent } from "./components/homeworkForm/homeworkForm.component";
import { InfoComponent } from "./components/info/info.component";
import { InfoFormComponent } from "./components/infoForm/infoForm.component";
import { MeetingsComponent } from "./components/meetings/meetings.component";
import { MeetingsFormComponent } from "./components/meetingsForm/meetingsForm.component";
import { LoginComponent } from "./components/login/login.component";
import { RouterModule, Routes } from "@angular/router";
const appRoutes: Routes = [
	{path:"", component:MainPageComponent},
	{path:"lectures", component:LecturesComponent},
	{path:"homework", component:HomeworkComponent},
	{path:"info", component:InfoComponent},
	{path:"meetings", component:MeetingsComponent},
	{path:"login", component:LoginComponent}
];
@NgModule({
	declarations: [
		AppComponent,
		MainPageComponent,
		LecturesComponent,
		HomeworkComponent,
		InfoComponent,
		MeetingsComponent,
		LoginComponent,
		LecturesFormComponent,
		HomeworkFormComponent,
		InfoFormComponent,
		MeetingsFormComponent
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot(
			appRoutes,
			{enableTracing: true}
		),
		HttpClientModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
