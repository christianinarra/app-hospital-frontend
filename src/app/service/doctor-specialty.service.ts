import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DoctorSpecialty } from '../models/doctor-specialty';

@Injectable({
  providedIn: 'root'
})
export class DoctorSpecialtyService {

  linkApi = 'http://localhost:8080/doctor-specialty/';

  constructor(private httpClient: HttpClient) { }

  public findSpecialties(doctorId: number): Observable<DoctorSpecialty[]> {
    return this.httpClient.get<DoctorSpecialty[]>(this.linkApi + `doctor-id/${doctorId}`);
  }
}