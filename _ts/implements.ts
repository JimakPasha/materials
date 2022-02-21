// иногда нужно для того, чтобы более явно указать на источник ошибки(это не обязательно).

// т.е. мы пишем implements, когда хотим, чтобы в классе были все поля и методы от которого имплементируется класс


interface IUser {
    location: {
        lat: number;
        lng: number;
    };
}

export class User implements IUser{
    name: string;
    surName: string;
    location: {
        lat: number;
        lng: number;
    };

    constructor() {
        this.name = 'Jack';
        this.surName = 'Broun';
        this.location = {
            lat: 123,
            lng: 123
        }
    }
}

// т.е. в юзере обязательно должны быть поля location (lat и lng)