import { describe, test, assert } from 'vitest'
import { isAValidLetterToSantaClaus } from '../challenges/theGrinch'

describe('isAValidLetterToSantaClaus', () => {
    test('should return false when given a invalid letter only with opened parentheses', () => {
        // Arrange
        const letter: string = "bici coche (balón bici coche"
        const expected: boolean = false

        // Act
        const result: boolean = isAValidLetterToSantaClaus(letter)
        // Assert
        assert.equal(result, expected)
    });

    test('should return false when given a invalid letter with void parentheses', () => {
        // Arrange
        const letter: string = "bici coche ()"
        const expected: boolean = false

        // Act
        const result: boolean = isAValidLetterToSantaClaus(letter)

        // Assert
        assert.equal(result, expected)
    });

    test('should return false when given invalid letter without parenthesis', () => {
        // Arrange
        const letter: string = "bici coche balón bici coche"
        const expected: boolean = false

        // Act
        const result: boolean = isAValidLetterToSantaClaus(letter)

        // Assert
        assert.equal(result, expected)
    });

    test('should return false when given a void letter', () => {
        // Arrange
        const letter: string = ""
        const expected: boolean = false

        // Act
        const result: boolean = isAValidLetterToSantaClaus(letter)

        // Assert
        assert.equal(result, expected)
    });

    test('should return false when given parenthesis with space inside', () => {
        // Arrange
        const letter: string = "bici coche bici ( ) coche peluche"
        const expected: boolean = false

        // Act
        const result: boolean = isAValidLetterToSantaClaus(letter)

        // Assert
        assert.notEqual(result, expected)
    });

    test('should return true when given a correct letter', () => {
        // Arrange
        const letter: string = "bici coche bici ( muñeca ) coche peluche"
        const expected: boolean = true

        // Act
        const result: boolean = isAValidLetterToSantaClaus(letter)

        // Assert
        assert.equal(result, expected)
    });
});