import { UserEstonia } from "../../src/class/user-estonia"
import { UserPoland } from "../../src/class/user-poland";

// example #1 - simple
describe("Estonia", () => {
    let user: UserEstonia;

    beforeEach(() => {
        user = new UserEstonia("Karl", 19, "123")
    })

    test("should return true if user is adult", () => {
        expect(user.isAdult()).toBe(true)
    })


    test("should return true if user age is exactly 18", () => {
        user.age = 18;
        expect(user.age).toBe(18);
        expect(user.isAdult()).toBe(true);
    })
})

describe("Poland", () => {
    let user: UserPoland;

    beforeEach(() => {
        user = new UserPoland("Karl", 22, "123")
    })

    test("should return true if user is adult", () => {
        expect(user.isAdult()).toBe(true)
    })


    test("should return true if user age is exactly 21", () => {
        user.age = 21;
        expect(user.age).toBe(21);
        expect(user.isAdult()).toBe(true);
    })

    test("should return false if user age is 20", () => {
        user.age = 20;
        expect(user.age).toBe(20);
        expect(user.isAdult()).toBe(false);
    })
})