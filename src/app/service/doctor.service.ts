import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Doctor } from '../models/doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  linkApi = 'https://fullstack-javascript-309920.uc.r.appspot.com/doctor/';

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<Doctor[]> {
    return this.httpClient.get<Doctor[]>(this.linkApi + 'list');
  }

  public detail(id: number): Observable<Doctor> {
    return this.httpClient.get<Doctor>(this.linkApi + `detail/${id}`);
  }

  public save(data: Doctor): Observable<any> {
    return this.httpClient.post<any>(this.linkApi + 'create', data);
  }

  public uploadPhoto(id: number, image: File): Observable<any> {
    const formData = new FormData();
    formData.append('multipartFile', image);
    return this.httpClient.post<any>(this.linkApi + `upload-photo/${id}`, formData);
  }

  public update(id: number, data: Doctor): Observable<any> {
    return this.httpClient.put<any>(this.linkApi + `update/${id}`, data);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.linkApi + `delete/${id}`);
  }
}
