import { Component, OnInit } from '@angular/core';
import { MeetingsFormComponent } from "./../meetingsForm/meetingsForm.component";
import { IPerson } from "./../../models/iperson";//I think, if you're here you know how it looks
import { IMeeting } from "./../../models/imeeting";/*
* Looks like:
* place:string You know some restaurant or bar or anything else
* date:string "YYYY-MM-DD" I think you've seen sth like this before
* description:string Where each subgroup is meeting and any other useful details
*/
import { HttpServiceProvider } from "./../../services/httpService";

@Component({
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.css'],
  providers: [HttpServiceProvider]
})
export class MeetingsComponent implements OnInit{
	people:IPerson[];
	meeting;
	display;
	constructor(private http:HttpServiceProvider){}
	ngOnInit(){
		this.people = this.http.getListOfPeople("getPeople");
		let tmp = this.http.getMeeting("getMeeting");
		tmp.then(response=>{
			let t = <IMeeting>response;
			for(let i in t){
				this.meeting[i] = t[i];
			}
		});
		alert(this.meeting);
	}
	makePassed(){
		this.http.remove("removeMeeting")
	}
}
