import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  
  constructor(private _router:Router) { }

  ngOnInit(): void {
  }

  submit(){
    console.log(this.formData);
    this._router.navigate(["result"],{queryParams:this.formData});
  }
}
