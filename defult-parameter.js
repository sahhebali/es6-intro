
/* function add(num1, num2 = 33) {
    // option 2
    // num2 = num2 || 0;
    // option 1
    // if (num2 == undefined) {
    //     num2 = 0;
    // }
    const total = num1 + num2;
    return total;
}
const result = add(15, 0);
console.log(result);

function fullName(first, last = 'Chowdhury') {
    const name = first + ' ' + last;
    return name;
} */

//  my try
function friendAge(first, second = 25) {
    const sumFriend = first + second;
    return sumFriend;
}
const friendAgeCalculate = friendAge(20);
console.log(friendAgeCalculate);