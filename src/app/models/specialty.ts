export class Specialty {
    id?: number;
    name!: string;
    description!: string;
    avatarIcon!: string;

    // tslint:disable-next-line: typedef
    setData(name: string, description: string, avatarIcon: string) {
        this.name = name;
        this.description = description;
        this.avatarIcon = avatarIcon;
    }
}
