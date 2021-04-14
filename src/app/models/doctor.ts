import { Hospital } from '../models/hospital';

export class Doctor {
    id?: number;
    name: string | undefined;
    lastName: string | undefined;
    address: string | undefined;
    dateBirth: Date | undefined;
    profilePhoto: string | undefined;
    hospital!: Hospital;
    hospitalId: number | undefined;

    // tslint:disable-next-line: typedef
    setData(name: string, lastName: string, address: string, dateBirth: Date, profilePhoto: string, hospital: Hospital, hospitalId: number) {
        this.name = name;
        this.lastName = lastName;
        this.address = address;
        this.dateBirth = dateBirth;
        this.profilePhoto = profilePhoto;
        this.hospitalId = hospitalId;
        this.hospital = hospital;
    }
}
