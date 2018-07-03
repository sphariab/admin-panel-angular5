import { Injectable } from '@angular/core';
/*import decode from 'jwt-decode';*/
import 'rxjs/add/operator/map';
import {
  HttpRequest,
  HttpClient,
} from '@angular/common/http';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  public getToken(): string {
    return localStorage.getItem('token');
  }

  public isAuthenticated(): void {
    // get the token
    const token = this.getToken();
    // return a boolean reflecting
    // whether or not the token is expired
    /*return tokenNotExpired(token);*/
  }

  public login(username: string, password: string) {
    return this.http.post<any>('/api/authenticate', { username: username, password: password })
      .map(user => {
        // login successful if there's a jwt token in the response
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
        }

        return user;
      });
  }

  public logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }

  cachedRequests: Array<HttpRequest<any>> = [];

  public collectFailedRequest(request): void {
    this.cachedRequests.push(request);
  }

  public retryFailedRequests(): void {
    // retry the requests. this method can
    // be called after the token is refreshed
  }



}

