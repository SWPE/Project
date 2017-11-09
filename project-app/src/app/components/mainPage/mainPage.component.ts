/*
 * Used show the main page.
 * Depencies: Component, IPerson, HttpServiceProvider, OnInit
 * */
import { Component } from '@angular/core';
import { IPerson } from "./../../models/iperson";/*Interface which defines looking of every person in array. It looks like:
* id:int
* name:string "Name Surename"
* number:string "xxx-xxx-xxxx"
* isComing:boolean shows if person comes to the nearest defined event
*/
import { HttpServiceProvider } from "./../../services/httpService";//API between front-end and server
import { OnInit } from "@angular/core";//Used to catch onInit event
@Component({
  templateUrl: './mainPage.component.html',//Html template
  styleUrls: ['./mainPage.component.css'],//Css template
  providers:[HttpServiceProvider]
})
export class MainPageComponent implements OnInit{
	people: IPerson[];//Array which contains each person of the group
	constructor(private http: HttpServiceProvider){//defining its own provider
	}
	ngOnInit(){
		this.people = this.http.getListOfPeople("getPeople");//Get people
	}
}
