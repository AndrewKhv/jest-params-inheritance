export class UserEstonia {
    name : string
    age : number
    idCode : string

    constructor(name: string, age: number, idCode: string) {
        this.name = name
        this.age = age
        this.idCode = idCode
    }

    isAdult(): boolean {
        return this.age >= 18
    }

}