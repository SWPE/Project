import { Component, OnInit } from '@angular/core';
import { InfoFormComponent } from "./../infoForm/infoForm.component";
import { IInfo, IInfoFile } from "./../../models/iinfo";/*
* Looks like:
* name:string
* text:string some description of something
* files:IInfoFile[] it's an array :))
*
* IInfo.files looks like:
* name:string
* source:string
*/
import { HttpServiceProvider } from "./../../services/httpService";

@Component({
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
  providers:[HttpServiceProvider]
})
export class InfoComponent implements OnInit{
	info;
	constructor(private http:HttpServiceProvider){}
	ngOnInit(){
		this.http.getData("getInfo").then(data => {
			this.info = data;
		});
	}
}
