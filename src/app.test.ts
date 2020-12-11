import { fizzBuzz } from "./app";
describe('first test', () => {
    it('returns a string for the number', () => {
        expect(fizzBuzz(1)).toBe('1');
    });

    it('returns 2 as a string for the number 2', () => {
        expect(fizzBuzz(2)).toBe('2');
    });

    it('return Fizz when the number 3 is processed', () => {
        expect(fizzBuzz(3)).toBe('Fizz');
    });

    it('return Fizz when the number 6 is processed', () => {
        expect(fizzBuzz(6)).toBe('Fizz');
    });

    it('return Fizz when the number 9 is processed', () => {
        expect(fizzBuzz(9)).toBe('Fizz');
    });

    it('return Buzz when the number 5 is processed', () => {
        expect(fizzBuzz(5)).toBe('Buzz');
    });

    it('return Buzz when the number 10 is processed', () => {
        expect(fizzBuzz(10)).toBe('Buzz');
    });

    it('return Buzz when the number 20 is processed', () => {
        expect(fizzBuzz(20)).toBe('Buzz');
    });

    it('return FizzBuzz when the number 15 is processed', () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz');
    });

    it('return FizzBuzz when the number 30 is processed', () => {
        expect(fizzBuzz(30)).toBe('FizzBuzz');
    });

    it('return FizzBuzz when the number 45 is processed', () => {
        expect(fizzBuzz(45)).toBe('FizzBuzz');
    });
});

