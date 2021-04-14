import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hospital } from '../models/hospital';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  linkApi = 'http://localhost:8080/hospital/';

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<Hospital[]> {
    return this.httpClient.get<Hospital[]>(this.linkApi + 'list');
  }

  public detail(id: number): Observable<Hospital> {
    return this.httpClient.get<Hospital>(this.linkApi + `detail/${id}`);
  }

  public save(data: Hospital): Observable<any> {
    return this.httpClient.post<any>(this.linkApi + 'create', data);
  }

  public update(id: number, data: Hospital): Observable<any> {
    return this.httpClient.put<any>(this.linkApi + `update/${id}`, data);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.linkApi + `delete/${id}`);
  }
}