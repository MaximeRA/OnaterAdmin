import {Component, OnInit} from '@angular/core';
import {UserService} from "./users/user.service";



@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./app.component.css']
})

export class DashboardComponent implements OnInit{
  totalUsers: number;

  constructor(private userService: UserService){};


  ngOnInit():void{

  }

}
