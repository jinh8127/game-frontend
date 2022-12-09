import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from '../model/account/Account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  url:string="http://localhost:8080/api/v1/accounts"
  constructor(private http: HttpClient) { }

  getAccounts(): Observable<Account[]>{
    return this.http.get<Account[]>(this.url);
  }

  getAccount(id: string): Observable<Account>{
    return this.http.get<Account>(this.url+'/'+id);
  }

  createAccount(account:Account): Observable<Account>{
    return this.http.post<Account>(this.url, account);
  }

  updateAccount(account:Account):Observable<Account>{
    return this.http.put<Account>(this.url+'/'+ account.id, account);
  }

  deleteAccount(id: string){
    return this.http.delete(this.url+'/'+id);
  }

}
