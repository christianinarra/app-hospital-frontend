import { Component, OnInit } from '@angular/core';
import { Specialty } from '../models/specialty';
import { SpecialtyService } from '../service/specialty.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';



@Component({
  selector: 'app-new-specialty',
  templateUrl: './new-specialty.component.html',
  styleUrls: ['./new-specialty.component.scss']
})
export class NewSpecialtyComponent implements OnInit {

  name = '';
  description = '';
  avatarIcon = '';

  constructor(
    private specialtyService: SpecialtyService,
    private toastr: ToastrService,
    private router: Router,
    private spinner: NgxSpinnerService
    ) { }

  ngOnInit(): void {}

  onCreate(): void {
    // tslint:disable-next-line: deprecation
    this.spinner.show();
    const specialty = new Specialty();
    specialty.setData(this.name, this.description, this.avatarIcon);
    this.specialtyService.save(specialty).subscribe(
      data => {
        this.toastr.success('Doctor Created', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.spinner.hide();
        this.router.navigate(['/specialties']);
      },
      err => {
        this.toastr.error(err.error.message, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.spinner.hide();
        this.router.navigate(['/specialties']);
      }
    );
  }

}
