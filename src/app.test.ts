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
});

