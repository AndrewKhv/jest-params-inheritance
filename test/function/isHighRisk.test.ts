import { isHighRisk } from "../../src/function/financial"

// test suite with no parameterization. See below for parameterized test suite
describe("isHighRisk", () => {

    beforeAll(() => {
        console.log("All tests started")
    })

    beforeEach(() => {
        console.log("test started")
    })

    afterEach(() => {
        console.log("test finished")
    })

    afterAll(() => {
        console.log("All tests finished")
    })

    test.each([
        [10001, true],
        [50000, true],
        [0, true], //false
        [9999, false],
        [10000, false]
    ])("should return %s for amount %s", (amount, tf) => {
        expect(isHighRisk(amount)).toBe(tf)

        console.log("this test finished %s", amount, tf)
    });
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