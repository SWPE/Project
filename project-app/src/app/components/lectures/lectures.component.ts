import { Component, OnInit } from '@angular/core';
import { LecturesFormComponent } from "./../lectureForm/lecturesForm.component";//this components has its own form to post data to the server
import { HttpServiceProvider } from "./../../services/httpService";
import { ILecture } from "./../../models/ilecture";/*
* Looks like:
* subject:string "OPI"
* fileName:string "presentation.ppt"
* source:string "url" link which can be used to download file
* description:string short description of lection if it's very important
*/

@Component({
	templateUrl: './lectures.component.html',
	styleUrls: ['./lectures.component.css'],
	providers:[HttpServiceProvider]
})
export class LecturesComponent implements OnInit{
	lectures;
	constructor(private http: HttpServiceProvider){}
	ngOnInit(){
		this.http.getData("getLectures").then(data => {
			this.lectures = data;
		});
	}
}
