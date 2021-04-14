import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PatientService } from '../service/patient.service';
import { Patient } from '../models/patient';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-new-patient',
  templateUrl: './new-patient.component.html',
  styleUrls: ['./new-patient.component.scss']
})
export class NewPatientComponent implements OnInit {

  name = '';
  lastName = '';
  address = '';
  dateBirth = new Date();
  profilePhoto = '';

  constructor(
    private patientService: PatientService,
    private toastr: ToastrService,
    private router: Router,
    private spinner: NgxSpinnerService
    ) { }

  ngOnInit(): void {}

  onCreate(): void {
    // tslint:disable-next-line: deprecation
    this.spinner.show();
    const patient = new Patient();
    patient.setData(this.name, this.lastName, this.address, this.dateBirth, this.profilePhoto);
    this.patientService.save(patient).subscribe(
      data => {
        this.toastr.success('Doctor Created', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.spinner.hide();
        this.router.navigate(['/patients']);
      },
      err => {
        this.toastr.error(err.error.message, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.spinner.hide();
        this.router.navigate(['/patients']);
      }
    );
  }

}
