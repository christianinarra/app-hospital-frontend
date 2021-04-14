import { Component, OnInit } from '@angular/core';
import { Patient } from '../models/patient';
import { PatientService } from '../service/patient.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-patient',
  templateUrl: './list-patient.component.html',
  styleUrls: ['./list-patient.component.scss']
})
export class ListPatientComponent implements OnInit {

  patients: Patient[] = [];

  constructor(
    private patientService: PatientService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.loadList();
  }

  loadList(): void {
    this.patientService.list().subscribe(
      data => {
        this.patients = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  // tslint:disable-next-line: typedef
  deletePatient(patient: Patient) {
    this.patientService.delete(Number(patient.id)).subscribe(
      data => {
        this.toastr.success('Doctor deleted', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.loadList();
      },
      err => {
        this.toastr.error(err.error.message, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
      }
    );
  }

}
