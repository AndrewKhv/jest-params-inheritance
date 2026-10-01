import { UserEstonia } from "../../src/class/user-estonia"
import {UserPoland} from "../../src/class/user-poland";

// example #2 - with beforeEach
describe("Estonia", () => {

    let user: UserEstonia

    beforeEach(() => {
        user = new UserEstonia("Karl", 25, "39901010001")
    })

    test("should return true if user is adult", () => {
        expect(user.isAdult()).toBe(true)
    })

    test("should return true if user age is exactly 18", () => {
        user.age = 18

        expect(user.isAdult()).toBe(true)
    })

    test("should return true if user age is exactly 18", () => {
        user.age = 17

        expect(user.isAdult()).toBe(false)
    })

})