import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SpecialtyService } from '../service/specialty.service';
import { Specialty } from '../models/specialty';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-edit-specialty',
  templateUrl: './edit-specialty.component.html',
  styleUrls: ['./edit-specialty.component.scss']
})
export class EditSpecialtyComponent implements OnInit {

  @ViewChild('imageInputFile', {static: false}) imageFile!: ElementRef;

  specialty: Specialty;
  image!: File;
  imageMin!: File;
  hospitalId = 0;

  constructor(
    private serviceProvider: SpecialtyService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router,
    private spinner: NgxSpinnerService
  ) {
    this.specialty = new Specialty();
  }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params.id;
    // tslint:disable-next-line: deprecation
    this.serviceProvider.detail(id).subscribe(
      data => {
        this.specialty = data;
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.router.navigate(['/specialties']);
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
    this.serviceProvider.update(id, this.specialty).subscribe(
      data => {
        this.toastr.success('Patient updated', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/specialties']);
      },
      err => {
        this.toastr.error(err.error.message, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.router.navigate(['/specialties']);
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
        this.router.navigate(['/specialties']);
      },
      err => {
        this.toastr.error(err.error.message, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.router.navigate(['/specialties']);
      }
    );
  }

}
