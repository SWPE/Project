//Some angular things to achieve features
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";


@Injectable()//Show that it can be used as the provider of the component
export class HttpServiceProvider{
	private baseUrl:string;
	

	constructor(private http:HttpClient){//Get special predefined by angular provider which is the connection with the server
		this.baseUrl = "http://127.0.0.1:5000/";
	}
	getData(url:string):Promise<any>{
		return new Promise((resolve,reject)=>{
			this.http.get(this.baseUrl+url).subscribe(data=>{
				resolve(data);
			});
		});
	}
}
