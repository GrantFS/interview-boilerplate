import { fizzBuzz } from "./app";
describe('first test', () => {
    it('returns a string for the number', () => {
        expect(fizzBuzz(1)).toBe('1');
        expect(fizzBuzz(2)).toBe('2');
        expect(fizzBuzz(4)).toBe('4');
        expect(fizzBuzz(98)).toBe('98');
    });

    it('returns Fizz for a multiple of 3', () => {
        expect(fizzBuzz(3)).toBe('Fizz');
        expect(fizzBuzz(6)).toBe('Fizz');
        expect(fizzBuzz(99)).toBe('Fizz');
    });

    it('returns Buzz for a multiple of 5', () => {
        expect(fizzBuzz(5)).toBe('Buzz');
        expect(fizzBuzz(10)).toBe('Buzz');
        expect(fizzBuzz(100)).toBe('Buzz');
    });

    it('returns FizzBuzz for a multiple of 3 and 5', () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz');
        expect(fizzBuzz(30)).toBe('FizzBuzz');
        expect(fizzBuzz(90)).toBe('FizzBuzz');
    });
});

