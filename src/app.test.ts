import { fizzBuzz } from "./app";
describe('first test', () => {
    it('returns a string for the number', () => {
        expect(fizzBuzz(1)).toBe('1');
        expect(fizzBuzz(2)).toBe('2');
        expect(fizzBuzz(4)).toBe('4');
        expect(fizzBuzz(98)).toBe('98');
    });
});

