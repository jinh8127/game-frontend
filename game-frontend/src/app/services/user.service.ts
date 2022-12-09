import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url:string="http://localhost:8080/api/v1/accounts"
  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.url);
  }

  getUser(id: string): Observable<User>{
    return this.http.get<User>(this.url+'/'+id);
  }

  createUser(user:User): Observable<User>{
    return this.http.post<User>(this.url, user);
  }

  updateUser(user:User):Observable<User>{
    return this.http.put<User>(this.url+'/'+ user.id, user);
  }

  deleteUser(id: string){
    return this.http.delete(this.url+'/'+id);
  }
}
