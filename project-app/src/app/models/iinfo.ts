export interface IInfoFile{
	source:string;
	name:string;
}
export interface IInfo{
	name:string;
	text:string;
	files:IInfoFile[];
	date:string;
}
