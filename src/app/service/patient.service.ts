import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from '../models/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  linkApi = 'http://localhost:8080/patient/';

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<Patient[]> {
    return this.httpClient.get<Patient[]>(this.linkApi + 'list');
  }

  public detail(id: number): Observable<Patient> {
    return this.httpClient.get<Patient>(this.linkApi + `detail/${id}`);
  }

  public save(data: Patient): Observable<any> {
    return this.httpClient.post<any>(this.linkApi + 'create', data);
  }

  public uploadPhoto(id: number, image: File): Observable<any> {
    const formData = new FormData();
    formData.append('multipartFile', image);
    return this.httpClient.post<any>(this.linkApi + `upload-photo/${id}`, formData);
  }

  public update(id: number, data: Patient): Observable<any> {
    return this.httpClient.put<any>(this.linkApi + `update/${id}`, data);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.linkApi + `delete/${id}`);
  }
}
