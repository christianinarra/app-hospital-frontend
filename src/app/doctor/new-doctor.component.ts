import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HospitalService } from '../service/hospital.service';
import { DoctorService } from '../service/doctor.service';
import { Doctor } from '../models/doctor';
import { Hospital } from '../models/hospital';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-new-doctor',
  templateUrl: './new-doctor.component.html',
  styleUrls: ['./new-doctor.component.scss']
})
export class NewDoctorComponent implements OnInit {

  @ViewChild('imageInputFile', {static: false}) imageFile: ElementRef | undefined;

  name = '';
  lastName = '';
  address = '';
  dateBirth = new Date();
  profilePhoto = '';
  image!: File;
  imageMin!: File;
  hospital: Hospital = new Hospital('', '');
  hospitals: Hospital[] = [];
  hospitalId = 0;

  constructor(
    private doctorService: DoctorService,
    private hospitalService: HospitalService,
    private toastr: ToastrService,
    private router: Router,
    private spinner: NgxSpinnerService
    ) { }

  // tslint:disable-next-line: typedef
  onFileChange(event: any) {
    this.image = event.target.files[0];
    const fr = new FileReader();
    fr.onload = (e: any) => {
      this.imageMin = e.target.result;
    };
    fr.readAsDataURL(this.image);
  }

  reset(): void {
    this.image = null as any;
    this.imageMin = null as any;
    if (this.imageFile) {
      this.imageFile.nativeElement.value = '';
    }
  }

  ngOnInit(): void {
    this.loadHospitalList();
  }

  loadHospitalList(): void {
    // tslint:disable-next-line: deprecation
    this.hospitalService.list().subscribe(
      data => {
        this.hospitals = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  onCreate(): void {
    // tslint:disable-next-line: deprecation
    this.spinner.show();
    const doctor = new Doctor();
    doctor.setData(this.name, this.lastName, this.address, this.dateBirth, this.profilePhoto, this.hospital, this.hospitalId);
    this.doctorService.save(doctor).subscribe(
      data => {
        this.toastr.success('Doctor Created', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.spinner.hide();
        this.router.navigate(['/doctors']);
      },
      err => {
        this.toastr.error(err.error.message, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.spinner.hide();
        this.reset();
        this.router.navigate(['/doctors']);
      }
    );
  }
}
