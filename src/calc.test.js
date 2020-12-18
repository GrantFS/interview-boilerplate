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
});

function Add(numbers) {
    let num = numbers.split(',');
    return num.reduce(function(acc, current) {
        return acc+Number(current);
    }, 0);
}
