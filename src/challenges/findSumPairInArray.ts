export function findSumPairInArray(numbers: number[], result: number): number[] | null {
    let pair: number[] | null = null;

    numbers.some((currentNumber, index) => {
        const nextNumber = numbers.slice(index + 1).find(number => number === result - currentNumber);

        if (nextNumber !== undefined) return pair = [currentNumber, nextNumber];
    });

    return pair;
}