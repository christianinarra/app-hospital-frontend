import { Doctor } from './doctor';
import { Specialty } from './specialty';

export class DoctorSpecialty {
    id?: number;
    doctor!: Doctor;
    specialty!: Specialty;    
}
