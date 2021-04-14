import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DoctorService } from '../service/doctor.service';
import { Doctor } from '../models/doctor';
import { HospitalService } from '../service/hospital.service';
import { DoctorSpecialtyService } from '../service/doctor-specialty.service';
import { Hospital } from '../models/hospital';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { DoctorSpecialty } from '../models/doctor-specialty';

@Component({
  selector: 'app-edit-doctor',
  templateUrl: './edit-doctor.component.html',
  styleUrls: ['./edit-doctor.component.scss']
})
export class EditDoctorComponent implements OnInit {
  @ViewChild('imageInputFile', {static: false}) imageFile!: ElementRef;

  doctor: Doctor;
  image!: File;
  imageMin!: File;
  hospital: Hospital;
  hospitals: Hospital[] = [];
  doctorSpecialties: DoctorSpecialty[] = [];
  hospitalId = 0;

  constructor(
    private serviceProvider: DoctorService,
    private hospitalService: HospitalService,
    private doctorSpecialtyService: DoctorSpecialtyService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router,
    private spinner: NgxSpinnerService
  ) {
    this.doctor = new Doctor();
    this.hospital = new Hospital('', '');
  }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params.id;
    // tslint:disable-next-line: deprecation
    this.serviceProvider.detail(id).subscribe(
      data => {
        this.doctor = data;
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.router.navigate(['/']);
      }
    );
    this.loadHospitalList();
    this.loadSpecialty();
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

  loadSpecialty(): void {
    const id = this.activatedRoute.snapshot.params.id;
    // tslint:disable-next-line: deprecation
    this.doctorSpecialtyService.findSpecialties(id).subscribe(
      data => {
        this.doctorSpecialties = data;
      },
      err => {
        console.log(err);
      }
    );
  }

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

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.serviceProvider.update(id, this.doctor).subscribe(
      data => {
        this.toastr.success('Hospital updated', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/doctors']);
      },
      err => {
        this.toastr.error(err.error.message, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.router.navigate(['/doctors']);
      }
    );
  }

  onUploadPhoto(): void {
    this.spinner.show();
    const id = this.activatedRoute.snapshot.params.id;
    this.serviceProvider.uploadPhoto(id, this.image).subscribe(
      data => {
        this.toastr.success('Photo updated', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.spinner.hide();
        this.router.navigate(['/doctors']);
      },
      err => {
        this.toastr.error(err.error.message, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.router.navigate(['/doctors']);
      }
    );
  }

}
