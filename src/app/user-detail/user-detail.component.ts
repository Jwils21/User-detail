import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'
import { User } from '../user'
import { JsonResponse } from '../JsonResponse'


@Component({
  selector: 'user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: User;



  constructor(private usersvc: UserService) {
  	  	//Get user
  	this.usersvc.get(2)
  		.subscribe(resp => {
  			this.user = resp.Data;
  			console.log(resp);
  		});
  }

  ngOnInit() {
  }

}
