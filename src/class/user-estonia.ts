import {BaseUser} from "./base-user";

export class UserEstonia extends BaseUser {
    idCode : string

    constructor(name: string, age: number, idCode: string) {
        super(name, age)
        this.idCode = idCode
    }

    isAdult(): boolean {
        return this.age >= 21
    }

    changeName(): void {}
}