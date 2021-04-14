export class Patient {
    id?: number;
    name!: string;
    lastName!: string;
    address!: string;
    dateBirth!: Date;
    profilePhoto!: string;

    // tslint:disable-next-line: typedef
    setData(name: string, lastName: string, address: string, dateBirth: Date, profilePhoto: string) {
        this.name = name;
        this.lastName = lastName;
        this.address = address;
        this.dateBirth = dateBirth;
        this.profilePhoto = profilePhoto;
    }
}
