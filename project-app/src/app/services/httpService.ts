import { IPerson } from "./../models/iperson";
import { IHomework } from "./../models/ihomework";
import { ILecture } from "./../models/ilecture";
import { IInfo, IInfoFile } from "./../models/iinfo"; 
export class HttpServiceProvider{
	listOfPeople:IPerson[];
	listOfHomewokrs:IHomework[];
	listOfLectures:ILecture[];
	listOfInfo:IInfo[];
	info;
	lectures;
	homework;
	people;

	constructor(){
		this.people = [{id:"1",name:"Авдеев Алексей",number:"095-473-06-68",isComing:true},{id:"2",name:"Благой Владислав",number:"095-097-17-00",isComing:true},{id:"3",name:"Буданцев Павел",number:"099-678-06-58",isComing:true},{id:"4",name:"Возгрива Анна",number:"097-250-50-41",isComing:true},{id:"5",name:"Волоховский Виталий",number:"068-438-87-08",isComing:true},{id:"6",name:"Гончаров Дмитрий",number:"066-185-40-38",isComing:true},{id:"7",name:"Гулиев Нурал",number:"099-781-82-16",isComing:true},{id:"8",name:"Зинченко Юрий",number:"093-130-60-70",isComing:true},{id:"9",name:"Иваненко Виктория",number:"099-018-85-16",isComing:true},{id:"10",name:"Исаева Эльвира",number:"050-555-96-15",isComing:true},{id:"11",name:"Киевский Александр",number:"066-028-60-41",isComing:true},{id:"12",name:"Кириленко Елена",number:"066-599-65-30",isComing:true},{id:"13",name:"Лукашов Дмитрий",number:"096-841-34-36",isComing:true},{id:"14",name:"Лютова Камила",number:"095-716-43-38",isComing:true},{id:"15",name:"Максименко Даниил",number:"099-629-70-91",isComing:true},{id:"16",name:"Михайленко Роман",number:"099-328-54-48",isComing:true},{id:"17",name:"Осташко Евгений",number:"098-213-60-89",isComing:true},{id:"18",name:"Пилипенко Сергей",number:"066-930-04-08",isComing:true},{id:"19",name:"Сайчишина Наталия",number:"099-288-50-26",isComing:true},{id:"20",name:"Тесленко Денис",number:"099-639-14-68",isComing:true},{id:"21",name:"Титаренко Степан",number:"099-402-32-51",isComing:true},{id:"22",name:"Фрегер Олег",number:"095-225-11-99",isComing:true},{id:"23",name:"Хазратов Назар",number:"050-880-92-77",isComing:true},{id:"24",name:"Ховрат Артём",number:"096-424-48-36",isComing:true},{id:"25",name:"Щербина Анастасия",number:"066-055-17-34",isComing:true}];
		this.homework = [{subject:"OPI", whenGiven:"2000-00-00", whenPass:"2000-00-01", textDescription:"sdasd", fileName:"test.ppt", source:"#"}];
		this.lectures = [{subject:"Opi", fileName:"Pres.ppt", source:"#", date:"2000-00-00", description:"Description"}];
		this.info = [{name:"Test", text:"Lorem ipsum", files:[{source:"#", name:"Test"}], date:"2000-00-00"}];
		this.listOfPeople = [];
		this.listOfHomewokrs = [];
		this.listOfLectures = [];
		this.listOfInfo = [];
	}
	getListOfPeople(){
		for(let person of this.people){
			this.listOfPeople.push(<IPerson>person);
		}
		return this.listOfPeople;
	}
	getListOfHomeworks(){
		for(let hm of this.homework){
			this.listOfHomewokrs.push(<IHomework>hm);
		}
		return this.listOfHomewokrs;
	}
	getListOfLectures(){
		for(let l of this.lectures){
			this.listOfLectures.push(<ILecture>l);
		}
		return this.listOfLectures;
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
}
