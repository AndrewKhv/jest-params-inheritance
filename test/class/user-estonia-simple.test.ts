import { UserEstonia } from "../../src/class/user-estonia"

// example #1 - simple
describe("Estonia", () => {

    test("should return true if user is adult", () => {
        const user = new UserEstonia("Karl", 25, "39901010001")

        expect(user.isAdult()).toBe(true)
    })


    test("should return true if user age is exactly 18", () => {
        const user = new UserEstonia("Karl", 18, "50501010001")

        expect(user.isAdult()).toBe(true)
    })

})