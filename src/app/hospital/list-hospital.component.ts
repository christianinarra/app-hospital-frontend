import { Component, OnInit } from '@angular/core';
import { Hospital } from '../models/hospital';
import { HospitalService } from '../service/hospital.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-hospital',
  templateUrl: './list-hospital.component.html',
  styleUrls: ['./list-hospital.component.scss']
})
export class ListHospitalComponent implements OnInit {

  hospitals: Hospital[] = [];

  constructor(
    private hospitalService: HospitalService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.loadList();
  }

  loadList(): void {
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

  // tslint:disable-next-line: typedef
  deleteHospital(hospital: Hospital) {
    // tslint:disable-next-line: deprecation
    this.hospitalService.delete(Number(hospital.id)).subscribe(
      data => {
        this.toastr.success('Hospital deleted', 'OK', {
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
