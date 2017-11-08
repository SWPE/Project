import { Component, OnInit } from '@angular/core';
import { IHomework } from "./../../models/ihomework";
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
