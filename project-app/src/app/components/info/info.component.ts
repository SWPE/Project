import { Component } from '@angular/core';
import { InfoFormComponent } from "./../infoForm/infoForm.component"

@Component({
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {
	info = [{name:"Test", text:"Lorem ipsum", files:[{source:"#", name:"Test"}], date:"2000-00-00"}];
}
