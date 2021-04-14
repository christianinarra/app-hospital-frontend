import { Component, OnInit } from '@angular/core';
import { Historic } from '../models/historic';
import { HistoricService } from '../service/historic.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-historic',
  templateUrl: './list-historic.component.html',
  styleUrls: ['./list-historic.component.scss']
})
export class ListHistoricComponent implements OnInit {

  historics: Historic[] = [];

  constructor(
    private historicService: HistoricService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.loadList();
  }

  loadList(): void {
    // tslint:disable-next-line: deprecation
    this.historicService.list().subscribe(
      data => {
        this.historics = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  // tslint:disable-next-line: typedef
  deleteHospital(historic: Historic) {
    // tslint:disable-next-line: deprecation
    this.historicService.delete(Number(historic.id)).subscribe(
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
