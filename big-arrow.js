const big = (num1, num2) => num1 + num2;
const sum = big(90, 22);
// console.log(sum)

const multiply = (num1, num2, num3) => num1 * num2 * num3;
const sum2 = multiply(3, 3, 4);
// console.log(sum2);

const tentimes = (num) => num * 10;
const sum3 = tentimes(16);
// console.log(sum3);

const fivetimes = num => num * 12;
const sum4 = fivetimes(8);
// console.log(sum4);

const getName = () => 'MD SAHEB';
const name = getName();
// console.log(name);

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const multiply = sum * diff;
    const result = multiply * 5;

    return result

}
const total = doMath(13, 12);
console.log(total);


