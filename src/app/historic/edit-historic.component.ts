import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../service/doctor.service';
import { Doctor } from '../models/doctor';
import { ToastrService } from 'ngx-toastr';
import { Patient } from '../models/patient';
import { PatientService } from '../service/patient.service';
import { Historic } from '../models/historic';
import { HistoricService } from '../service/historic.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-historic',
  templateUrl: './edit-historic.component.html',
  styleUrls: ['./edit-historic.component.scss']
})
export class EditHistoricComponent implements OnInit {

  historic: Historic;
  doctor: Doctor;
  doctors: Doctor[] = [];
  doctorId = 0;
  patient: Patient;
  patients: Patient[] = [];
  patientId = 0; 

  constructor(
    private historicService: HistoricService,
    private doctorService: DoctorService,
    private patientService: PatientService,
    private toastr: ToastrService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { 
    this.historic = new Historic();
    this.doctor = new Doctor();
    this.patient = new Patient();
  }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params.id;
    // tslint:disable-next-line: deprecation
    this.historicService.detail(id).subscribe(
      data => {
        this.historic = data;
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.router.navigate(['/']);
      }
    );
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

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.historicService.update(id, this.historic).subscribe(
      data => {
        this.toastr.success('Historic updated', 'OK', {
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
