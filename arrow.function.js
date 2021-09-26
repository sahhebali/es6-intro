
// function declares
function add(num1, num2) {
    return num1 + num2;
}
// function exprission
const add2 = function add2(num1, num2) {
    return num1 + num2;
}
// anonymus function
const add3 = function (num1, num2) {
    return num1 + num2;
}
// arrow function 
const add4 = (num1, num2) => num1 + num2;
const sum4 = add4(16, 16);
const sum3 = add3(18, 14);
const sum2 = add2(22, 10);
const sumtotal = add(10, 22);

console.log(sumtotal, sum2, sum3, sum4);