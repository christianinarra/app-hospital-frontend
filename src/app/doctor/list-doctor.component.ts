import { Component, OnInit } from '@angular/core';
import { Doctor } from '../models/doctor';
import { DoctorService } from '../service/doctor.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-doctor',
  templateUrl: './list-doctor.component.html',
  styleUrls: ['./list-doctor.component.scss']
})
export class ListDoctorComponent implements OnInit {

  doctors: Doctor[] = [];

  constructor(
    private doctorService: DoctorService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.loadList();
  }

  loadList(): void {
    this.doctorService.list().subscribe(
      data => {
        this.doctors = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  // tslint:disable-next-line: typedef
  deleteDoctor(doctor: Doctor) {
    this.doctorService.delete(Number(doctor.id)).subscribe(
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
