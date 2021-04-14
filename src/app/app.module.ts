import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* HOSPITAL */
import { ListHospitalComponent } from './hospital/list-hospital.component';
import { NewHospitalComponent } from './hospital/new-hospital.component';
import { EditHospitalComponent } from './hospital/edit-hospital.component';
/* DOCTOR */
import { ListDoctorComponent } from './doctor/list-doctor.component';
import { NewDoctorComponent } from './doctor/new-doctor.component';
import { EditDoctorComponent } from './doctor/edit-doctor.component';
/* PATIENT */
import { ListPatientComponent } from './patient/list-patient.component';
import { NewPatientComponent } from './patient/new-patient.component';
import { EditPatientComponent } from './patient/edit-patient.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// External Component Messages Animated
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { Cloudinary } from 'cloudinary-core';
import { ListSpecialtyComponent } from './specialty/list-specialty.component';
import { NewSpecialtyComponent } from './specialty/new-specialty.component';
import { EditSpecialtyComponent } from './specialty/edit-specialty.component';
import { ListHistoricComponent } from './historic/list-historic.component';
import { NewHistoricComponent } from './historic/new-historic.component';
import { EditHistoricComponent } from './historic/edit-historic.component';

@NgModule({
  declarations: [
    AppComponent,
    ListHospitalComponent,
    NewHospitalComponent,
    EditHospitalComponent,
    ListDoctorComponent,
    NewDoctorComponent,
    EditDoctorComponent,
    ListPatientComponent,
    NewPatientComponent,
    EditPatientComponent,
    ListSpecialtyComponent,
    NewSpecialtyComponent,
    EditSpecialtyComponent,
    ListHistoricComponent,
    NewHistoricComponent,
    EditHistoricComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
