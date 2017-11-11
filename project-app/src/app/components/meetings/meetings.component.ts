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
import {HttpClient} from "@angular/common/http";
import "rxjs/add/operator/map";
@Component({
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.css'],
  providers: [HttpServiceProvider]
})
export class MeetingsComponent implements OnInit{
	private people;
	private meeting;
	private display = "downloading";
	constructor(private http:HttpClient, private https:HttpServiceProvider){}
	ngOnInit(){
		this.https.getData("getPeople").then(data => {
			this.people = data;
		});
		new Promise((resolve,reject)=>{
			this.http.get("http://localhost:5000/getMeeting").subscribe(data => {
				resolve(data);
			});
		}).then(data=>{
			if(data['place']!==undefined){
				this.display = "downloaded";
				this.meeting = data;
			}else{this.display = "junk";}
		});

	}
	makePassed(){
		this.http.get("http://127.0.0.1:5000/removeMeeting").subscribe(data=>data);
		location.reload(true);
	}
}
