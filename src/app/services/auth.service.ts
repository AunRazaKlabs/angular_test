import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  username: string = '';

  set _username(username: string){
    this.username = username;
  }

  get _getName(){
    return this.username ?? '';
  }
  constructor(private http: HttpClient, private localStorage: LocalStorageService) {}

  signup(payload: any) {
    return this.http.post(`${environment.api}users`, payload);
  }

  login(email: string, password: string) {
    return this.http.get(`${environment.api}users`).pipe(map((res: any) => {
      let response = null;
      res.map((user: any) => {
        if(user.email === email && user.password === password){
          response = user;
        }
      })
      return response
    }));
  }

  logout(){
    this._username = '';
    this.localStorage.clearData();
  }
}
