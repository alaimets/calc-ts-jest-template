import {multiply, calculatePercentage, isEven, compareStrings, isPositive} from "../src/functions";

describe('Tests for multiply function', (): void => {
    test('TEST-01 Multiply two positive integer numbers', (): void => {
        const expectedResult: number = 36;
        const actualResult: number = multiply(6, 6);
        expect(actualResult).toBe(expectedResult);
    })

    test('TEST-02 Multiply two positive float numbers', (): void => {
        const expectedResult: number = 0.21;
        const actualResult: number = multiply(0.3, 0.7);
        expect(actualResult).toBe(expectedResult);
    })
})

describe('Tests for calculatePercentage function', (): void => {
    test('TEST-03 Percentage is correctly calculated', (): void => {
        const expectedResult: number = 33.3;
        const actualResult: number = calculatePercentage(50, 150);
        expect(actualResult).toBeCloseTo(expectedResult, 1);
    })

    test('TEST-04 Percentage is correctly calculated, when first number is 0', (): void => {
        const actualResult: number = calculatePercentage(0, 357865421354654);
        expect(actualResult).toBe(0);
    })
})

describe('Tests for isEven function', (): void => {
    test('TEST-05 Returns TRUE, when number is even', (): void => {
        expect(isEven(10)).toBeTruthy();
    })

    test('TEST-06 Returns FALSE, when number is not even', (): void => {
        expect(isEven(3)).toBeFalsy();
    })
})

describe('Tests for compareStrings function', (): void => {
    test('TEST-07 Returns TRUE, when two strings are equal', (): void => {
        expect(compareStrings('Raymond', 'Raymond')).toBeTruthy();
    })

    test('TEST-08 Returns FALSE, when two strings are not equal', (): void => {
        expect(compareStrings('Raymond', 'Astrid')).toBeFalsy();
    })
})

describe('Tests for isPositive function', (): void => {
    test('TEST-09 Returns TRUE, when number is positive', (): void => {
        expect(isPositive(9)).toBeTruthy();
    })

    test('TEST-10 Returns FALSE, when number is negative', (): void => {
        expect(isPositive(-10)).toBeFalsy();
    })
})