import { fizzBuzz } from "./app";
describe('first test', () => {
    it('returns a string for the number', () => {
        expect(fizzBuzz(1)).toBe('1');
    });

    it('returns 2 as a string for the number 2', () => {
        expect(fizzBuzz(2)).toBe('2');
    });
});

