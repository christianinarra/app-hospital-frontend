import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/* Hospital */
import { ListHospitalComponent } from './hospital/list-hospital.component';
import { NewHospitalComponent } from './hospital/new-hospital.component';
import { EditHospitalComponent } from './hospital/edit-hospital.component';

/* Doctor */
import { ListDoctorComponent } from './doctor/list-doctor.component';
import { NewDoctorComponent } from './doctor/new-doctor.component';
import { EditDoctorComponent } from './doctor/edit-doctor.component';

/* Patient */
import { ListPatientComponent } from './patient/list-patient.component';
import { NewPatientComponent } from './patient/new-patient.component';
import { EditPatientComponent } from './patient/edit-patient.component';

/* Specialties */
import { ListSpecialtyComponent } from './specialty/list-specialty.component';
import { NewSpecialtyComponent } from './specialty/new-specialty.component';
import { EditSpecialtyComponent } from './specialty/edit-specialty.component';

/* Historic */
import { ListHistoricComponent } from './historic/list-historic.component';
import { NewHistoricComponent } from './historic/new-historic.component';
import { EditHistoricComponent } from './historic/edit-historic.component';

const routes: Routes = [
  {path: '', component: ListHospitalComponent},
  {path: 'hospitals', component: ListHospitalComponent},
  {path: 'hospital/new', component: NewHospitalComponent},
  {path: 'hospital/edit/:id', component: EditHospitalComponent},

  {path: 'doctors', component: ListDoctorComponent},
  {path: 'doctor/new', component: NewDoctorComponent},
  {path: 'doctor/edit/:id', component: EditDoctorComponent},

  {path: 'patients', component: ListPatientComponent},
  {path: 'patient/new', component: NewPatientComponent},
  {path: 'patient/edit/:id', component: EditPatientComponent},

  {path: 'specialties', component: ListSpecialtyComponent},
  {path: 'specialty/new', component: NewSpecialtyComponent},
  {path: 'specialty/edit/:id', component: EditSpecialtyComponent},

  {path: 'historic', component: ListHistoricComponent},
  {path: 'historic/new', component: NewHistoricComponent},
  {path: 'historic/edit/:id', component: EditHistoricComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
