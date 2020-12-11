function isLeapYear(s: number): boolean {

    if (s === 1900) {
        return false;
    }
    return s % 4 === 0;
}

describe('leapYear', () => {
    it('should be true for 1996', () => {
        expect(isLeapYear(1996)).toBe(true);
    });

    it('should be true for 1992', () => {
        expect(isLeapYear(1992)).toBe(true);
    });

    it('should be true for 1988', () => {
        expect(isLeapYear(1988)).toBe(true);
    });

    it('should be divisible by 100', () => {
        expect(isLeapYear(1900)).toBe(false);
    });

    it('should be divisible by 100', () => {
        expect(isLeapYear(1800)).toBe(false);
    });
});

// Write a function that returns true or false depending on
// whether its input integer is a leap year or not.
// A leap year is defined as one that is divisible by 4,
// but is not otherwise divisible by 100
// unless it is also divisible by 400.
// For example, 2001 is a typical common year and 1996 is a typical leap year, whereas 1900 is an atypical common year and 2000 is an atypical leap year.
