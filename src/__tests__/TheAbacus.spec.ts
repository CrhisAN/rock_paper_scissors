import { describe, test, assert } from 'vitest'
import { numberRepresentedOnTheAbacus } from '../challenges/theAbacus'

describe('The abacus challenge', () => {
  test('returns the correct number for a given abacus representation', () => {
    // Arrange
    const abacus: string[] = [
      'OO---OOOOOOO',
      'OOO---OOOOOO',
      '---OOOOOOOOO',
      'OO---OOOOOOO',
      'OOOOOOO---OO',
      'OOOOOOOOO---',
      '---OOOOOOOOO'
    ]
    const expected: string = '2.302.790'

    // Act
    const result: string = numberRepresentedOnTheAbacus(abacus)

    // Assert
    assert.equal(result, expected)
  })

  test('returns zero when no beads are on the left side', () => {
    // Arrange
    const abacus: string[] = [
      '---OOOOOOOOO',
      '---OOOOOOOOO',
      '---OOOOOOOOO',
      '---OOOOOOOOO',
      '---OOOOOOOOO',
      '---OOOOOOOOO',
      '---OOOOOOOOO'
    ]
    const expected: string = '0'

    // Act
    const result: string = numberRepresentedOnTheAbacus(abacus)

    // Assert
    assert.equal(result, expected)
  })

  test('returns the maximum number when all beads are on the left side', () => {
    // Arrange
    const abacus: string[] = [
      'OOOOOOOOO---',
      'OOOOOOOOO---',
      'OOOOOOOOO---',
      'OOOOOOOOO---',
      'OOOOOOOOO---',
      'OOOOOOOOO---',
      'OOOOOOOOO---'
    ]
    const expected: string = '9.999.999'

    // Act
    const result: string = numberRepresentedOnTheAbacus(abacus)

    // Assert
    assert.equal(result, expected)
  })

  test('handles an abacus with less than 7 rows', () => {
    // Arrange
    const abacus: string[] = ['OO---OOOOOOO', 'OOO---OOOOOO', '---OOOOOOOOO', 'OO---OOOOOOO']
    const expected: string = '2.302'
    const notExpected: string = '2.302.000'

    // Act
    const result: string = numberRepresentedOnTheAbacus(abacus)

    // Assert
    assert.notEqual(result, expected)
    assert.equal(result, notExpected)
  })

  test('handles an empty abacus', () => {
    // Arrange
    const abacus: string[] = []
    const expected: string = '0'

    // Act
    const result: string = numberRepresentedOnTheAbacus(abacus)

    // Assert
    assert.equal(result, expected)
  })
})
