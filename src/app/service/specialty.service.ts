import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Specialty } from '../models/specialty';

@Injectable({
  providedIn: 'root'
})
export class SpecialtyService {

  linkApi = 'http://localhost:8080/specialty/';

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<Specialty[]> {
    return this.httpClient.get<Specialty[]>(this.linkApi + 'list');
  }

  public detail(id: number): Observable<Specialty> {
    return this.httpClient.get<Specialty>(this.linkApi + `detail/${id}`);
  }

  public save(data: Specialty): Observable<any> {
    return this.httpClient.post<any>(this.linkApi + 'create', data);
  }

  public uploadPhoto(id: number, image: File): Observable<any> {
    const formData = new FormData();
    formData.append('multipartFile', image);
    return this.httpClient.post<any>(this.linkApi + `upload-photo/${id}`, formData);
  }

  public update(id: number, data: Specialty): Observable<any> {
    console.log(data);
    return this.httpClient.put<any>(this.linkApi + `update/${id}`, data);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.linkApi + `delete/${id}`);
  }
}
