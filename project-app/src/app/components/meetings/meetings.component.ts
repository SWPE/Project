import { Component, OnInit } from '@angular/core';
import { MeetingsFormComponent } from "./../meetingsForm/meetingsForm.component";
import { IPerson } from "./../../models/iperson";
import { IMeeting } from "./../../models/imeeting";
import { HttpServiceProvider } from "./../../services/httpService";

@Component({
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.css'],
  providers: [HttpServiceProvider]
})
export class MeetingsComponent implements OnInit{
	people:IPerson[];
	meeting:IMeeting;
	constructor(private http:HttpServiceProvider){}
	ngOnInit(){
		this.people = this.http.getListOfPeople();
		this.meeting = this.http.getMeeting();
	}
}
