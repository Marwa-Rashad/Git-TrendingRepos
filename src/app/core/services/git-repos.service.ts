import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GitReposService {

  constructor(public _HttpClient: HttpClient) { }


  getRepos():Observable<any> {
    return this._HttpClient.get<Object>(
      'https://api.github.com/search/repositories?q=created:%3E2017-10-22&sort=stars&order=desc',
);

}}

