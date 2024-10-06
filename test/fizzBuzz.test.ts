import {FizzBuzz} from '../src/fizzBuzz';

const fizzBuzz = new FizzBuzz();
let result:number|string;


it("un argument de 1 retourne 1", () => 
    {
        
        result = fizzBuzz.answerFor(1);
        expect(result).toEqual(1);
    }
);

it("un argument de 2 retourne 2", () => 
    {
        result = fizzBuzz.answerFor(2);
        expect(result).toEqual(2);
    }
);

it("un argument de 3 retourne Fizz", () => 
    {
        result = fizzBuzz.answerFor(3);
        expect(result).toEqual("Fizz");
    }
);

it("un argument de 6 retourne Fizz", () => 
    {
        result = fizzBuzz.answerFor(6);
        expect(result).toEqual("Fizz");
    }
);

it("un argument de 5 retourne Buzz", () => 
    {
        result = fizzBuzz.answerFor(5);
        expect(result).toEqual("Buzz");
    }
);

it("un argument de 10 retourne Buzz", () => 
    {
        result = fizzBuzz.answerFor(10);
        expect(result).toEqual("Buzz");
    }
);

it("un argument de 15 retourne FizzBuzz", () => 
    {
        result = fizzBuzz.answerFor(15);
        expect(result).toEqual("FizzBuzz");
    }
);

it("un argument de 30 retourne FizzBuzz", () => 
    {
        result = fizzBuzz.answerFor(30);
        expect(result).toEqual("FizzBuzz");
    }
);

it("Il faut imprimer Fizz au lieu du nombre si le nombre est un multiple de 3 ou contient un 3", () =>
{
    result = fizzBuzz.answerFor(13);
    expect(result).toEqual("Fizz");
}
);

it("Il faut imprimer Buzz au lieu du nombre si le nombre est un multiple de 5 ou contient un 5", () =>
    {
        result = fizzBuzz.answerFor(59);
        expect(result).toEqual("Buzz");
    }
);

it("Il faut imprimer FizzBuzz si le nombre est un multiple de 5 et de 3 ou contient un 5 et un 3", () =>
    {
        result = fizzBuzz.answerFor(53);
        expect(result).toEqual("FizzBuzz");
    }
    );