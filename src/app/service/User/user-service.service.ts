import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Users } from '../../model/Users';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

const userEndpoint = "http://localhost:9191/project-manager-api/users";

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<any> {
    let observables = this.httpClient.get(userEndpoint)
    return observables
  }

  insertUser(user: Users): Observable<any> {
    //  console.log('insert method>>>');
    // console.log(JSON.stringify(user));
    return this.httpClient.post(userEndpoint, JSON.stringify(user), httpOptions);
  }

  deleteUser(userId: number): Observable<any> {
    return this.httpClient.delete(userEndpoint+'?userId=' + userId)
  }

  editUser(userId: number, user: Users): Observable<any> {
    //console.log(JSON.stringify(user));
    return this.httpClient.put(userEndpoint,
      user, httpOptions);
  }

  getUserByName(userName: String): Observable<any> {
    return this.httpClient.get(userEndpoint+'?name=' + userName);
  }

  sortUsers(sortType: number): Observable<any> {
    return this.httpClient.get(userEndpoint+'?sorttype=' + sortType);
  }



}
