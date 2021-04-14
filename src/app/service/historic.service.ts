import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Historic } from '../models/historic';

@Injectable({
  providedIn: 'root'
})
export class HistoricService {

  linkApi = 'https://fullstack-javascript-309920.uc.r.appspot.com/historic/';

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<Historic[]> {
    return this.httpClient.get<Historic[]>(this.linkApi + 'list');
  }

  public detail(id: number): Observable<Historic> {
    return this.httpClient.get<Historic>(this.linkApi + `detail/${id}`);
  }

  public save(data: Historic): Observable<any> {
    return this.httpClient.post<any>(this.linkApi + 'create', data);
  }

  public update(id: number, data: Historic): Observable<any> {
    return this.httpClient.put<any>(this.linkApi + `update/${id}`, data);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.linkApi + `delete/${id}`);
  }
}
