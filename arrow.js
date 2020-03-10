const doubleit = num=>num*2;
const multi = doubleit(50);
console.log(multi);

const multivariable = (x, y) => x+y;
const plus = multivariable(5, 6);
console.log(plus);

const give = () => 7;
const result = give();
console.log(result);

const doMath = (x,y) => {
    const a = 7;
    const b = 5;
    const c = a + b;
    const d = a - b;
    const e = c * d;
    return e;
}

const math = doMath(6, 5);
console.log(math);

//previous time

function test1(a,b){
    const aa = 7;
    const bb = 5;
    const cc = aa + bb;
    const dd = aa - bb;
    const ee = cc * dd;
    return ee; 
    
}

const ptest = test1(6, 6);
console.log(ptest);

const name = "Razbir";
console.log(name);

const array = ["meta", "card", 4, 6];
array[1] = "ratul";
console.log(array);
