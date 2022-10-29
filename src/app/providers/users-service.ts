import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Users } from "../types/users.type";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class UsersService {
    private path: string = `${environment.apiBase}users`
    constructor(
        private http: HttpClient
    ){ }

    getAllUsers(){
        return this.http.get<{data: Users[]}>(this.path)
    }

    getOne(id: number){
        return this.http.get<{data: Users}>(`${this.path}/${id}`);
    }
}
