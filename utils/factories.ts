import { fakerEN } from "@faker-js/faker"

export function generateName(): string {
    return fakerEN.person.firstName()
}
