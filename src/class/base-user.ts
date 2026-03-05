export abstract class BaseUser {
    name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    isAdult(): boolean {
        return this.age >= 18
    }
}