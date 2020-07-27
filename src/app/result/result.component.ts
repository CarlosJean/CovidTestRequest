import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  fullname:string;
  email:string;
  description:string;

  constructor(private _currentRoute:ActivatedRoute) { }
  
  ngOnInit(): void {
    this._currentRoute.queryParams.subscribe(param=>{
      this.fullname = param.fullname;
      this.email = param.email;
      this.description = param.description;
    });
  }

  
}
