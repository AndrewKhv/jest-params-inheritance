import {isHighRisk, isHighRiskWithDebt} from "../../src/function/financial"

// test suite with parameterization
describe("isHighRisk with debt - parameterized test", () => {

    test.each([
        [20000, false],
        [10001, false],
        [5000, true],
        [0, true]
    ])(
        "should return true for amount %s and debt %s",
        (amount, debt) => {
            expect(isHighRiskWithDebt(amount, debt)).toBe(true)
        }
    )

    test.each([
        [0, false],
        [1000, false],
        [9999, false]
    ])(
        "should return false for amount %s and debt %s",
        (amount, debt) => {
            expect(isHighRiskWithDebt(amount, debt)).toBe(false)
        }
    )

})