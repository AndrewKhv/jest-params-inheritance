import { isHighRisk } from "../../src/function/financial"

// test suite with no parameterization. See below for parameterized test suite
describe("isHighRisk", () => {

    test("should return true for amount 10001", () => {
        expect(isHighRisk(10001)).toBe(true)
    })

    test("should return true for amount 50000", () => {
        expect(isHighRisk(50000)).toBe(true)
    })

    test("should return false for amount 0", () => {
        expect(isHighRisk(0)).toBe(false)
    })

    test("should return false for amount 9999", () => {
        expect(isHighRisk(9999)).toBe(false)
    })

    test("should return false for amount 10000", () => {
        expect(isHighRisk(10000)).toBe(false)
    })

})


// test suite with parameterization
describe("isHighRisk - parameterized test", () => {

    test.each([10001, 50000])(
        "should return true for amount %s",
        (amount) => {
            expect(isHighRisk(amount)).toBe(true)
        }
    )

    test.each([0, 5000, 9999, 10000])(
        "should return false for amount %s",
        (amount) => {
            expect(isHighRisk(amount)).toBe(false)
        }
    )

})