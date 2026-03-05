import { isPositive } from "../../src/function/positive"

describe("isPositive", () => {

    test("should return true for positive number", () => {
        expect(isPositive(5)).toBeTruthy()
    })

    test("should return false for negative number", () => {
        expect(isPositive(-5)).toBeFalsy()
    })
})