import { Doctor } from './doctor';
import { Patient } from './patient';

export class Historic {
    id?: number;
    description: string | undefined;
    dateVisit: Date | undefined;
    doctor!: Doctor;
    patient!: Patient;
    doctorId!: number;
    patientId!: number;

    // tslint:disable-next-line: typedef
    setData(description: string, dateVisit: Date, doctor: Doctor, patient: Patient) {
        this.description = description;
        this.dateVisit = dateVisit;
        this.doctor = doctor;
        this.patient = patient;
    }

    // tslint:disable-next-line: typedef
    setDoctor(id: number) {
        this.doctorId = id;
    }

    // tslint:disable-next-line: typedef
    setPatient(id: number) {
        this.patientId = id;
    }
}
