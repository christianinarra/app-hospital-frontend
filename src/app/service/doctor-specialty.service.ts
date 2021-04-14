import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DoctorSpecialty } from '../models/doctor-specialty';

@Injectable({
  providedIn: 'root'
})
export class DoctorSpecialtyService {

  linkApi = 'https://fullstack-javascript-309920.uc.r.appspot.com/doctor-specialty/';

  constructor(private httpClient: HttpClient) { }

  public findSpecialties(doctorId: number): Observable<DoctorSpecialty[]> {
    return this.httpClient.get<DoctorSpecialty[]>(this.linkApi + `doctor-id/${doctorId}`);
  }
}