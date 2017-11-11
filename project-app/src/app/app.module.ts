/*
 * The main module of the app.
 * Contains each component, service and modle which is provided by the application
 * Used to route the application and to distinguishing what to bootstrap
 * To get more information read documentation in the componets/app/app.component.ts
 * */
//Required by angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//API between server and front-end
import { HttpClientModule} from "@angular/common/http";

//Defined components
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

//Router
import { RouterModule, Routes } from "@angular/router";
const appRoutes: Routes = [//Shows which component has to be loaded it is depandanced on the url which user-client sends
	{path:"", component:MainPageComponent},
	{path:"lectures", component:LecturesComponent},
	{path:"homework", component:HomeworkComponent},
	{path:"info", component:InfoComponent},
	{path:"meetings", component:MeetingsComponent},
	{path:"login", component:LoginComponent}
];
@NgModule({
	declarations: [//Declaration of every component that is used to build application
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
	imports: [//Show what additional modules, services and providers are used to serve the components
		BrowserModule,
		RouterModule.forRoot(
			appRoutes,
			{enableTracing: true}
		),
		HttpClientModule
	],
	providers: [],
	bootstrap: [AppComponent]//The main element of application. Everything happens here
})
export class AppModule { }
