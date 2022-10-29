import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/providers/users-service';
import { Users } from 'src/app/types/users.type';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: Users[] = []
  constructor(
    private userService: UsersService, 
    private router: Router
    ) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(response => this.users = response.data)

  }
  goToPersonalInfo(userId: number){
    this.router.navigate([`userInfo/${userId}`])
  }
}
