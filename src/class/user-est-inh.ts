import {BaseUser} from "./base-user";

export class UserEstInh extends BaseUser {

    idCode : string

    constructor(name: string, age: number, idCode: string) {
        super(name, age)
        this.idCode = idCode
    }
}