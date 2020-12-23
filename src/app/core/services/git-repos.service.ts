import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GitReposService {

  constructor(public _HttpClient: HttpClient) { }


  getRepos(date: string, page: number): Observable<any> {
    return this._HttpClient.get<Object>(
      "https://api.github.com/search/repositories?q=created:>"
       + date + "&sort=stars&order=desc&page=" + page,
    )

      ;

  }
}

