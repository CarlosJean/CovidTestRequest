import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  //declaración de formdata
  formData = {
    fullname: null,
    email: null,
    description: null,
  };
  //declaración de formdata
  
  constructor() { }

  ngOnInit(): void {
  }

  submit(){
    console.log(this.formData);
  }
}
