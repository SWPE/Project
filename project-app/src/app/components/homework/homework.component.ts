import { Component, OnInit } from '@angular/core';
import { IHomework } from "./../../models/ihomework";/*
* Looks like:
* subject:string
* whenGiven:string "YYYY-MM-DD"
* whenPass:string "YYYY-MM-DD"
* textDescription:string "What to be done?"
* fileName:string
* source:string "url"
*/
import { HttpServiceProvider } from "./../../services/httpService";
@Component({
  templateUrl: './homework.component.html',
  styleUrls: ['./homework.component.css'],
  providers:[HttpServiceProvider]
})
export class HomeworkComponent implements OnInit{
	homeworks:IHomework[];
	constructor(private http: HttpServiceProvider){}
	ngOnInit(){
		this.homeworks = this.http.getListOfHomeworks("getHomeworks");
	}
	
}
