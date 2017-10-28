import { Component, OnInit } from '@angular/core';
import { InfoFormComponent } from "./../infoForm/infoForm.component";
import { IInfo, IInfoFile } from "./../../models/iinfo";
import { HttpServiceProvider } from "./../../services/httpService";

@Component({
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
  providers:[HttpServiceProvider]
})
export class InfoComponent implements OnInit{
	info:IInfo[];
	constructor(private http:HttpServiceProvider){}
	ngOnInit(){
		this.info = this.http.getListOfInfo();
	}
}
