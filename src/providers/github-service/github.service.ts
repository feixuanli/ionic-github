import {Http, Response} from '@angular/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import {User} from '../../models/user.interface';
import {USER_LIST} from '../../mocks/user.mocks';
import {Repository} from '../../models/repository.interface';
import { REPOSITORY_LIST } from '../../mocks/repository.mocks';
/*
  Generated class for the GithubServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GithubServiceProvider {
  private baseUrl: string = 'https://api.github.com/users';

  constructor(private http: Http) {
    console.log('Hello GithubServiceProvider Provider');
  }
  getUserInformation(username: string): Observable<User> {
    return this.http.get(`${this.baseUrl}/${username}`)
    .do((data: Response) => console.log(data))
    .map((data: Response) => data.json())
    .do((data: Response) => console.log(data))
    .catch((error: Response) => Observable.throw(error.json().error) || "Server error.")
    ;
  }
  mockGetUserInformation(username: string): Observable<User> {
    return Observable.of(USER_LIST.filter(user => user.name === username)[0]);
  }
  mockGetRepositoryInformation(username: string): Observable<Repository[]> {
    return Observable.of(REPOSITORY_LIST.filter(repository => repository.owner.name === username))
  }

}
