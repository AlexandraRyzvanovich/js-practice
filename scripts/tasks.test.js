const secondsToDate = require('./secondsToDate');
const toBase2Converter = require('./toBase2Converter');
const substringOccurrencesCounter = require('./substringOccurrencesCounter');
const repeatingLetters = require('./repeatingLetters');
const redundant = require('./redundant');
const towerHanoi = require('./towerHanoi');
const matrixMultiplication = require('./matrixMultiplication');
const gather = require('./gather');

test('Add seconds', () => {
    expect(secondsToDate(5)).toStrictEqual(new Date(2020,5,2,0,0,5,2020));
});

test('toBase2Converter', () => {
    expect(toBase2Converter(10)).toBe('1010');
});

test('substringOccurrencesCounter', () => {
    expect(substringOccurrencesCounter('text', 'This text is about text')).toBe(2);
});

test('repeatingLetters', () => {
    expect(repeatingLetters('Hello!')).toBe('HHeelloo!!');
});

test('redundant', () => {
    expect(redundant('Hello!')()).toBe('Hello!');
});

test('towerHanoi', () => {
    expect(towerHanoi(2)).toBe(3);
});

let matrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
let matrix2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
let result = [
    [30, 36, 42],
    [66, 81, 96],
    [102, 126, 150]
];
test('matrixMultiplication', () => {
    expect(matrixMultiplication(matrix1, matrix2)).toStrictEqual(result);
});

test('gather', () => {
    expect(gather("e")("l")("o")("l")("!")("h").order(5)(0)(1)(3)(2)(4).get()).toBe('hello!');
});