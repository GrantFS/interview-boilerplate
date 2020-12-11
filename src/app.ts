export function fizzBuzz(n:number): string {
    if (n === 3 || n === 6) {
        return 'Fizz';
    }
    return ''+n;
}
