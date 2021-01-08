describe('Overall name', () => {
    it('test', () => {
        expect(toRoman(1)).toBe('I');
    });
});

function toRoman(number: number) : string {
    return 'I';
}

/*

Given a positive integer number write a function returning its Roman numeral representation as a String.
Examples:
1=> I			20=> XX			300=> CCC
2=> II			30=> XXX			400=> CD
3=> III		40=> XL			500=> D
4=> IV		50=> L			600=> DC
5=> V		60=> LX			700=> DCC
6=> VI		70=> LXX			800=> DCCC
7=> VII		80=> LXXX			846=> DCCCXLVI
8=> VIII		90=> XC			900=> CM
9=> IX		100=> C			1000=> M
10=> X		200=> CC			1999=> MCMXCIX
								2008=> MMVIII

#	TRANSFORMATION			STARTING  CODE	FINAL CODE
 1	{} => nil									return nil
 2	nil => constant				return nil		return “1”
 3	constant => constant+  		return “1”		return “1” + “2”
 4	constant => scalar			return “1” + “2”	return argument
 5	statement => statements    		return argument	return arguments
 6	unconditional => conditional		return arguments if(condition)return arguments
 7	scalar => array				dog				[dog, cat]
 8	array => container			[dog, cat]		{dog = “DOG”, cat = “CAT”}
 9	statement => tail recursion		a + b			a + recursion
10	conditional => loop			if(condition)	while(condition)
11	tail recursion => full recursion	a + recursion	recursion
12	expression => function		today - birthday	CalculateAge()
13	variable => mutation			day				var day = 10; day = 11;
14	switch case




*/
