import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/providers/users-service';
import { Users } from 'src/app/types/users.type';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  id: number = 0
  user: Users = {id: 0, first_name: '', last_name: '', email: '', avatar: ''}
  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.id = params["id"])
    this.usersService.getOne(this.id).subscribe(response => this.user = response.data)
  }

  
}
