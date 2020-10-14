import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8081/api/user';
const getUrl = 'http://localhost:8081/api/users';

@Injectable({
  providedIn: 'root'
})
export class PagesService {
  public previousPage = "/third-page"
  public nextPage = "/second-page"
  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(getUrl);
  }
  create(data) {
    return this.http.post(baseUrl, data)
  }
}
