import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {GitUser} from './git-user';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  user: GitUser[] = [];
  searchname: 'kamauvick';
  request = 'http://https://api.github.com/users/' + this.searchname + '?access_token=' + environment.APIKEY;

  constructor(private http: HttpClient) {
  }

  searchMyUser(searchname: string) {
    return new Promise((resolve, reject) => {
      this.http.get('https://api.github.com/users/kamauvick?access_token=3cbbddb991c02e7d5a2f0fd4224f9267a5153e5f').toPromise().then(
        (results) => {
          this.user = [];
          // tslint:disable-next-line:prefer-for-of
          for (let i = 0; i < results; i++) {
          }
          resolve();
          console.log(results);
        },
        (error) => {
          reject();
        }
      );
    });
  }
}





/*
 searchMyUser(userName: string): Observable<GitUser[]> {
   return this.http.get<GitUser[]>(this.request + '/users/' + userName);
 }
*/
