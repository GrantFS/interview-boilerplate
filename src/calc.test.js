describe('Simple Calculator', () => {
    it('accept a string of numbers', () => {
        expect(Add('1')).toBe(1);
    });

    it('accept a string of numbers', () => {
        expect(Add('2')).toBe(2);
    });

    it('accepts multiple numbers as strings', () => {
        expect(Add('1,2')).toBe(3);
    });
});

function Add(numbers) {
    return Number(numbers);
}
