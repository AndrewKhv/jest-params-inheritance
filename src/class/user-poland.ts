import {BaseUser} from "./base-user";

export class UserPoland extends BaseUser {
    pesel : string

    constructor(name: string, age: number, pesel: string) {
        super(name, age)
        this.pesel = pesel
    }

    isAdult(): boolean {
        return this.age >= 21
    }
}