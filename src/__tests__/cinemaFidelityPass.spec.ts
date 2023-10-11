import { describe, test, assert } from 'vitest'
import { shouldBuyFidelity } from '../challenges/cinemaFidelity'

describe("Using the shouldBuyFidelity() function", () => {
    test('Given "100 as number of the times to go to the cinema" when the function shouldBuyFidelity() returns true then the test successful', () => {
        //Pattern AAA

        // Arrange
        const numberOfTimesGoingToCinema = 100;
        const expected = true;

        // Act
        const result = shouldBuyFidelity(numberOfTimesGoingToCinema);

        // Assert
        assert.deepStrictEqual(result, expected);
    });

    test('Given "3 as number of the times to go to the cinema" when the function shouldBuyFidelity() returns false then the test successful', () => {
        //Pattern AAA

        // Arrange
        const numberOfTimesGoingToCinema = 3;
        const expected = false;

        // Act
        const result = shouldBuyFidelity(numberOfTimesGoingToCinema);

        // Assert
        assert.deepStrictEqual(result, expected);
    });

    test('Given "50 as number of the times to go to the cinema" when the function shouldBuyFidelity() returns true then the test successful', () => {
        //Pattern AAA

        // Arrange
        const numberOfTimesGoingToCinema = 50;
        const expected = true;

        // Act
        const result = shouldBuyFidelity(numberOfTimesGoingToCinema);

        // Assert
        assert.deepStrictEqual(result, expected);
    });

    test('Given "0 as number of the times to go to the cinema" when the function shouldBuyFidelity() returns false then the test successful', () => {
        //Pattern AAA

        // Arrange
        const numberOfTimesGoingToCinema = 0;
        const expected = false;

        // Act
        const result = shouldBuyFidelity(numberOfTimesGoingToCinema);

        // Assert
        assert.deepStrictEqual(result, expected);
    });
})