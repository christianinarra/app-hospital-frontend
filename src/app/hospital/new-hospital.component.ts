import { Component, OnInit } from '@angular/core';
import { HospitalService } from '../service/hospital.service';
import { Hospital } from '../models/hospital';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-hospital',
  templateUrl: './new-hospital.component.html',
  styleUrls: ['./new-hospital.component.scss']
})
export class NewHospitalComponent implements OnInit {

  name = '';
  address = '';

  constructor(
    private productoService: HospitalService,
    private toastr: ToastrService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const hospital = new Hospital(this.name, this.address);
    console.log(hospital);
    // tslint:disable-next-line: deprecation
    this.productoService.save(hospital).subscribe(
      data => {
        this.toastr.success('Hospital Created', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/hospitals']);
      },
      err => {
        this.toastr.error(err.error.message, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.router.navigate(['/hospitals']);
      }
    );
  }

}
