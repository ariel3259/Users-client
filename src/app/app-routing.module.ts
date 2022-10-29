import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserInfoComponent } from "./views/user-info/user-info.component";
import { UsersComponent } from "./views/users/users.component";

const routes: Routes = [
    {
        component: UsersComponent,
        path: ''
    },
    {
        component: UserInfoComponent,
        path: 'userInfo/:id'
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModudule{

}