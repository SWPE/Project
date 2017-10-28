import { Component } from '@angular/core';
import { IPerson } from "./../../models/iperson";
import { HttpServiceProvider } from "./../../services/httpService";
import { OnInit } from "@angular/core";
@Component({
  templateUrl: './mainPage.component.html',
  styleUrls: ['./mainPage.component.css'],
  providers:[HttpServiceProvider]
})
export class MainPageComponent implements OnInit{
	people: IPerson[];
	constructor(private http: HttpServiceProvider){
	}
	ngOnInit(){
		//this.people = this.http.getListOfPeople("http://localhost:4200/assets/people.json");
	}
}
