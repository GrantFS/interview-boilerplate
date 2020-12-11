export function fizzBuzz(n:number): string {
    const isMultipleOf5 = n % 5 === 0;
    const isMultipleOf3 = n % 3 === 0;
    if (isMultipleOf3 && isMultipleOf5) {
        return 'FizzBuzz';
    }
    if (isMultipleOf3) {
        return 'Fizz';
    }
    if (isMultipleOf5) {
        return 'Buzz';
    }
    return ''+n;
}
