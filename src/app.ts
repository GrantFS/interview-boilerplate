export function fizzBuzz(n:number): string {
    const isMultipleOf5 = n % 5 === 0;
    const isMultipleOf3 = n % 3 === 0;
    let value = '';
    if (isMultipleOf3) {
        value += 'Fizz';
    }
    if (isMultipleOf5) {
        value += 'Buzz';
    }

    return value == '' ? ''+n : value;
}
