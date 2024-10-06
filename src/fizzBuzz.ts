export class FizzBuzz {
    answerFor(arg0: number): string | number 
    {
        if (isFizzBuzz(arg0)) {return "FizzBuzz";}
        else if (isFizz(arg0)) {return "Fizz";}
        else if (isBuzz(arg0)) {return "Buzz";}
        return arg0;
    }   
    
}

function isFizz(arg0: number): boolean {
    return (arg0 % 3 === 0 || arg0.toString().includes("3")) ;
}

function isBuzz(arg0: number): boolean {
    return (arg0 % 5 === 0 || arg0.toString().includes("5"));
}

function isFizzBuzz(arg0: number): boolean {
    return ( arg0 % 5 === 0 && arg0 % 3 === 0 || (arg0.toString().includes("5")) && (arg0.toString().includes("3")));
}