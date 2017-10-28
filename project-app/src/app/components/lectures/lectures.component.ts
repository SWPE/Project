import { Component, OnInit } from '@angular/core';
import { LecturesFormComponent } from "./../lectureForm/lecturesForm.component";
import { HttpServiceProvider } from "./../../services/httpService";
import { ILecture } from "./../../models/ilecture";

@Component({
	templateUrl: './lectures.component.html',
	styleUrls: ['./lectures.component.css'],
	providers:[HttpServiceProvider]
})
export class LecturesComponent implements OnInit{
	lectures:ILecture[];
	constructor(private http: HttpServiceProvider){}
	ngOnInit(){
		this.lectures = this.http.getListOfLectures();
	}
}
