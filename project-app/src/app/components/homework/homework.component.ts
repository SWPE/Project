import { Component } from '@angular/core';

@Component({
  templateUrl: './homework.component.html',
  styleUrls: ['./homework.component.css']
})
export class HomeworkComponent {
	homeworks = [{subject:"OPI", whenGiven:"2000-00-00", whenPass:"2000-00-01", textDescription:"sdasd", fileName:"test.ppt", source:"#"}];
}
