import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    UsersComponent,
    UserInfoComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ]
})
export class ViewsModule { }
