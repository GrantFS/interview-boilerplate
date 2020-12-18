describe('Simple Calculator', () => {
    it('accept number as a string', () => {
        expect(Add('1')).toBe(1);
    });

    it('accept number as a string', () => {
        expect(Add('2')).toBe(2);
    });

    it('accepts multiple numbers as strings', () => {
        expect(Add('1,2')).toBe(3);
    });

    it('accepts an empty string', () => {
        expect(Add('')).toBe(0);
    });

    it('accepts unknown amount of numbers', () => {
        expect(Add('1,2,3')).toBe(6);
    });

    it('accepts multiple numbers in new lines', () => {
        expect(Add('1\n2,3')).toBe(6);
    });

    it('Does not accept a comma next to a new line', () => {
        expect(Add('1,\n')).toBe(NaN);
    });
});

function Add(numbers) {
    return numbers.replace('\n', ',')
        .split(',')
        .reduce((acc, currentValue) => acc += Number(currentValue), 0);
}
