 const abacus: string[] = [
  "O---OOOOOOOO",
  "OOO---OOOOOO",
  "---OOOOOOOOO",
  "OO---OOOOOOO",
  "OOOOOOO---OO",
  "OOOOOOOOO---",
  "---OOOOOOOOO"
];

const numberRepresentedOnTheAbacus = (abacus: string[]): string => {
    const number = abacus.reduce((accumulator: number, currentValue: string, index: number) => {
      const beadsLeft = currentValue.split('---')[0].length;
      return accumulator + beadsLeft * Math.pow(10, 6 - index);
    }, 0);

    return number.toLocaleString();
}


export {abacus, numberRepresentedOnTheAbacus}