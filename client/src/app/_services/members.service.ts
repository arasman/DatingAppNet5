import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Member } from '../_models/member';

/*
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
  const localToken = (): string => {
  let result = '';
  if (localStorage.getItem('user') != null) {
    result = JSON.parse(localStorage.getItem('user')).token;
  }
  return result;
};

const httpOptions = {
  headers: new HttpHeaders({
    Authorization: 'Bearer ' + localToken()
  })
};*/

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getMembers(): Observable<Member[]> {
    return this.http.get<Member[]>(this.baseUrl + 'users');
  }
  getMember(username: string): Observable<Member> {
    return this.http.get<Member>(this.baseUrl + 'users/' + username);
  }
}
