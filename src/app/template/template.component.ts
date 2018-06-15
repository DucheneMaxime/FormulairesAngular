import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  user: User = new User('Nartawak', 'test');

  constructor() { }

  handleSubmit(form: string){
    console.log('Submit', this.user);
  }

  ngOnInit() {
  }

}
