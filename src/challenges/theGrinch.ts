export const isAValidLetterToSantaClaus = (letter: string): boolean => {
    const regexValidatingLetter = /^[^\{\[\(\)]*\([^\{\[\(\)]+\)+.*/g
    return regexValidatingLetter.test(letter)
}