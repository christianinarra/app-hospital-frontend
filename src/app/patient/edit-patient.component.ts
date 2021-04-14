import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PatientService } from '../service/patient.service';
import { Patient } from '../models/patient';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.scss']
})
export class EditPatientComponent implements OnInit {
  @ViewChild('imageInputFile', {static: false}) imageFile!: ElementRef;

  patient: Patient;
  image!: File;
  imageMin!: File;
  hospitalId = 0;

  constructor(
    private serviceProvider: PatientService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router,
    private spinner: NgxSpinnerService
  ) {
    this.patient = new Patient();
  }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params.id;
    // tslint:disable-next-line: deprecation
    this.serviceProvider.detail(id).subscribe(
      data => {
        this.patient = data;
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.router.navigate(['/']);
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
    this.serviceProvider.update(id, this.patient).subscribe(
      data => {
        this.toastr.success('Patient updated', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/patients']);
      },
      err => {
        this.toastr.error(err.error.message, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.router.navigate(['/patients']);
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
        this.router.navigate(['/patients']);
      },
      err => {
        this.toastr.error(err.error.message, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.router.navigate(['/patients']);
      }
    );
  }

}
