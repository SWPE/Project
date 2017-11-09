/*
 * Kind of the most interseting and overcomplicated part of the program ;)
 * It contains each model which is described via the inerfaces.
 * It connects to the  server through the base url and url which is given by the component to get the output from the server
 * Read getData method documentation then getListOfPeople method documentation. Other methods work in the same way
 * */

//Inetrfaces which are used as the models in the app
import { IPerson } from "./../models/iperson";
import { IHomework } from "./../models/ihomework";
import { ILecture } from "./../models/ilecture";
import { IInfo, IInfoFile } from "./../models/iinfo"; 
import { IMeeting } from "./../models/imeeting";

//Some angular things to achieve features
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";


@Injectable()//Show that it can be used as the provider of the component
export class HttpServiceProvider{
	//Schemas for data that have to be load from the server
	private listOfPeople:IPerson[];
	private listOfHomewokrs:IHomework[];
	private listOfLectures:ILecture[];
	private listOfInfo:IInfo[];
	private meeting;
	private baseUrl:string;//Shows where server is located "http(s)://and_so_on"
	
	//Some junky data to init
	//private meetings;
	private info;
	private lectures;
	private homework;
	private people;

	constructor(private http:HttpClient){//Get special predefined by angular provider which is the connection with the server
		//I know, I could place it into the constructor, but imagine how long it would be :)
		//So this is kind of initialyzing of the data. I doesn't matter what data are placed to variables
		//but it's important to variables to be similiar with the corresponding schema
		this.homework = [{subject:"OPI", whenGiven:"2000-00-00", whenPass:"2000-00-01", textDescription:"sdasd", fileName:"test.ppt", source:"#"}];
		this.lectures = [{subject:"Opi", fileName:"Pres.ppt", source:"#", date:"2000-00-00", description:"Description"}];
		this.info = [{name:"Test", text:"Lorem ipsum", files:[{source:"#", name:"Test"}], date:"2000-00-00"}];
		//this.meetings = {place:"Secret Place", date:"2000-00-00", description:"Где собираемся, как добираемся?" };
		this.listOfPeople = [];
		this.listOfHomewokrs = [];
		this.listOfLectures = [];
		this.listOfInfo = [];

		this.baseUrl = "http://localhost:5000/"
	}
	getListOfPeople(url:string):IPerson[]{
		this.getData(this.baseUrl+url).then(response =>{//If get data in getData, so we have som respond
			process(response, this);//And we try to procces it. Response is some JSON
		});
		function process(obj, that){//Here we procces response
			//Each function is defined independently because JSON data are so different
			//obj - response
			//that - object which has called the function and which has the field to output.
			//Then parse data to the required type
			//Other getListOf functions are the same
			for(let i of obj){
				that.listOfPeople.push(<IPerson>i);
			}
		}
		console.log(this.listOfPeople);
		return this.listOfPeople;
	}
	getListOfHomeworks(url:string):IHomework[]{
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
	getListOfInfo(url:string):IInfo[]{
		this.getData(this.baseUrl+url).then(response=>{
			process(response, this);	
		});
		function process(obj, that){
			for(let i of obj){
				for(let file in i.files){
					i.files[file] = <IInfoFile>i.files[file];
				}
				that.listOfInfo.push(<IInfo>i);
			}	
		}
		alert(this.listOfInfo);
		return this.listOfInfo;
	}
	getMeeting(url:string):Promise<any>{
		let p = new Promise((resolve,reject)=>{
			this.http.get(this.baseUrl+url).subscribe(data=>{
				resolve(data)
			}, err=>{reject(err)})
		});
		return p;
	}
	getData(url:string){//Does it look pretty?)
		/*
		 * So...
		 * To get data from the server we have first create promise
		 * And subscribe data or error to the request.
		 * Then resolve or reject.
		 * Then it can be used to get data from the server.
		 * */
		return new Promise((resolve, reject)=>{
			this.http.get(url).subscribe(data => {
				resolve(data);
			}, err => {
				reject(err);
			});
		});
	}
	remove(url:string){
		this.getData(this.baseUrl+url);
	}
}
