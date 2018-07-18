import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service'
import { User } from './user';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  users: User[];

  constructor(private usersvc: UserService) {};

  ngOnInit() {
  	// //list users
  	// this.usersvc.list()
  	// 	.subscribe(resp => {
  	// 		this.users = []
  	// 		this.users = resp.Data;
  	// 		console.log(resp);
  	// 	});

  	// let user1 = new User() {
  	// 	this.Username = "Jim",


  	// }

  }
}
