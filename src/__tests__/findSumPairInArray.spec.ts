import { describe, test, assert } from 'vitest'
import { findSumPairInArray } from '../challenges/findSumPairInArray'

describe("Using the findSumPairInArray() function", () => {
    test('Given "[3,5,7,2] as array numbers and 10 as result of the sum of 2 numbers from the array" when the function findSumPairInArray() returns [3, 7] then true', () => {
        //Pattern AAA

        // Arrange
        const numbers = [3, 5, 7, 2]
        const resultNumber = 10
        const expected: number[] = [3, 7]

        // Act
        const result = findSumPairInArray(numbers, resultNumber)

        // Assert
        assert.deepStrictEqual(result, expected)
    });

    test('Given "[2,3,1,2] as array numbers and 4 as result of the sum of 2 numbers from the array" when the function findSumPairInArray() returns [2, 2] then true', () => {
        //Pattern AAA

        // Arrange
        const numbers = [2, 3, 1, 2]
        const resultNumber = 4
        const expected: number[] = [2, 2]

        // Act
        const result = findSumPairInArray(numbers, resultNumber)

        // Assert
        assert.deepStrictEqual(result, expected)
    });

    test('Given "[2, 2, 1, 5] as array numbers and 15 as result of the sum of 2 numbers from the array" when the function findSumPairInArray() returns null then true', () => {
        //Pattern AAA

        // Arrange
        const numbers = [2, 2, 1, 5]
        const resultNumber = 15
        const expected = null

        // Act
        const result = findSumPairInArray(numbers, resultNumber)

        // Assert
        assert.deepStrictEqual(result, expected)
    });

    test('Given "[] as array numbers and 5 as result of the sum of 2 numbers from the array" when the function findSumPairInArray() returns null then true', () => {
        //Pattern AAA

        // Arrange
        const numbers: any = []
        const resultNumber = 5
        const expected = null

        // Act
        const result = findSumPairInArray(numbers, resultNumber)

        // Assert
        assert.deepStrictEqual(result, expected)
    });
})