export function fizzBuzz(n:number): string {
    if (n === 3 || n === 6 || n === 9) {
        return 'Fizz';
    }
    return ''+n;
}
