import { Component } from '@angular/core';
import { LecturesFormComponent } from "./../lectureForm/lecturesForm.component";

@Component({
	templateUrl: './lectures.component.html',
	styleUrls: ['./lectures.component.css']
})
export class LecturesComponent {
	lectures = [{subject:"Opi", fileName:"Pres.ppt", source:"#", date:"2000-00-00", description:"Description"}];
}
