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
});

function Add(numbers) {
    const numbersSplitted = numbers.split(',');
    let total = 0;

    for(let i=0; i < numbersSplitted.length; i++) {
        total += Number(numbersSplitted[i]);
    }
    return total;
}
