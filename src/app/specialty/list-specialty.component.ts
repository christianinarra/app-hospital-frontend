import { Component, OnInit } from '@angular/core';
import { Specialty } from '../models/specialty';
import { SpecialtyService } from '../service/specialty.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-specialty',
  templateUrl: './list-specialty.component.html',
  styleUrls: ['./list-specialty.component.scss']
})
export class ListSpecialtyComponent implements OnInit {

  specialties: Specialty[] = [];

  constructor(
    private specialtyService: SpecialtyService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.loadList();
  }

  loadList(): void {
    this.specialtyService.list().subscribe(
      data => {
        this.specialties = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  // tslint:disable-next-line: typedef
  deleteSpecialty(patient: Specialty) {
    this.specialtyService.delete(Number(patient.id)).subscribe(
      data => {
        this.toastr.success('Specialty deleted', 'OK', {
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
