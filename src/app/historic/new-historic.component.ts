import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../service/doctor.service';
import { Doctor } from '../models/doctor';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Patient } from '../models/patient';
import { PatientService } from '../service/patient.service';
import { Historic } from '../models/historic';
import { HistoricService } from '../service/historic.service';

@Component({
  selector: 'app-new-historic',
  templateUrl: './new-historic.component.html',
  styleUrls: ['./new-historic.component.scss']
})
export class NewHistoricComponent implements OnInit {

  description = '';
  dateVisit = new Date();
  historic!: Historic;
  doctor!: Doctor;
  doctors: Doctor[] = [];
  doctorId = 0;
  patient!: Patient;
  patients: Patient[] = [];
  patientId = 0;  

  constructor(
    private historicService: HistoricService,
    private doctorService: DoctorService,
    private patientService: PatientService,
    private toastr: ToastrService,
    private router: Router,
    private spinner: NgxSpinnerService
    ) { }

  ngOnInit(): void {
    this.loadDoctorList();
    this.loadPatientList();
  }

  loadDoctorList(): void {
    // tslint:disable-next-line: deprecation
    this.doctorService.list().subscribe(
      data => {
        this.doctors = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  loadPatientList(): void {
    // tslint:disable-next-line: deprecation
    this.patientService.list().subscribe(
      data => {
        this.patients = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  onCreate(): void {
    // tslint:disable-next-line: deprecation    
    const historic = new Historic();
    historic.setData(this.description, this.dateVisit, this.doctor, this.patient);
    historic.setDoctor(this.doctorId);
    historic.setPatient(this.patientId);
    this.historicService.save(historic).subscribe(
      data => {
        this.toastr.success('Doctor Created', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });        
        this.router.navigate(['/historic']);
      },
      err => {
        this.toastr.error(err.error.message, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });        
        this.router.navigate(['/historic']);
      }
    );
  }

}
