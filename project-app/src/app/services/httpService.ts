import { IPerson } from "./../models/iperson";
import { IHomework } from "./../models/ihomework";
import { ILecture } from "./../models/ilecture";
import { IInfo, IInfoFile } from "./../models/iinfo"; 
import { IMeeting } from "./../models/imeeting";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable()
export class HttpServiceProvider{
	private listOfPeople:IPerson[];
	private listOfHomewokrs:IHomework[];
	private listOfLectures:ILecture[];
	private listOfInfo:IInfo[];
	private meeting:IMeeting;
	private data;
	private baseUrl;
	meetings;
	info;
	lectures;
	homework;
	people;

	constructor(private http:HttpClient){
		this.homework = [{subject:"OPI", whenGiven:"2000-00-00", whenPass:"2000-00-01", textDescription:"sdasd", fileName:"test.ppt", source:"#"}];
		this.lectures = [{subject:"Opi", fileName:"Pres.ppt", source:"#", date:"2000-00-00", description:"Description"}];
		this.info = [{name:"Test", text:"Lorem ipsum", files:[{source:"#", name:"Test"}], date:"2000-00-00"}];
		this.meetings = {place:"Secret Place", date:"2000-00-00", description:"Где собираемся, как добираемся?" };
		this.listOfPeople = [];
		this.listOfHomewokrs = [];
		this.listOfLectures = [];
		this.listOfInfo = [];
		this.meeting = <IMeeting>this.meetings;
		this.baseUrl = "http://localhost:5000/"
	}
	getListOfPeople(url:string):IPerson[]{
		this.getData(this.baseUrl+url).then(response =>{
			process(response, this);
		});
		function process(obj, that){
			for(let i of obj){
				that.listOfPeople.push(<IPerson>i);
			}
		}
		console.log(this.listOfPeople);
		return this.listOfPeople;
	}
	getListOfHomeworks(url:string):IHomework[]{
	/*	for(let hm of this.homework){
			this.listOfHomewokrs.push(<IHomework>hm);
		}*/
		this.getData(this.baseUrl+url).then(response=>{
			process(response, this);
		});
		function process(obj, that){
			for(let i of obj){
				that.listOfHomewokrs.push(<IHomework>i);
			}
		}
		return this.listOfHomewokrs.reverse();
	}
	getListOfLectures(url:string):ILecture[]{
		/*for(let l of this.lectures){
			this.listOfLectures.push(<ILecture>l);
		}*/
		this.getData(this.baseUrl+url).then(response=>{
			process(response, this);
		});
		function process(obj, that){
			for(let i of obj){
				that.listOfLectures.push(<ILecture>i);
			}
		}
		return this.listOfLectures.reverse();
	}
	getListOfInfo(){
		for(let l in this.info.files){
			this.info.files[l] = <IInfoFile>this.info.files[l];
		}
		for(let i of this.info){
			this.listOfInfo.push(<IInfo>i);
		}
		return this.listOfInfo;
	}
	getMeeting(){
		this.meeting = <IMeeting>this.meetings;
		return this.meeting;
	}
	getData(url:string){
		return new Promise((resolve, reject)=>{
			this.http.get(url).subscribe(data => {
				resolve(data);
			}, err => {
				reject(err);
			});
		});
	}
}
