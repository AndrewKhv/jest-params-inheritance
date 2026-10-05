import {BaseUser} from "./base-user";

export class UserGermany extends BaseUser {
    germanId : string

    constructor(name: string, age: number, germanId: string) {
        super(name, age);
        this.germanId = germanId
    }

    isAdult(): boolean {
        return this.age >= 21
    }
}