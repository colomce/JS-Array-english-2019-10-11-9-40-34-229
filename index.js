// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
function getTypeOfArray(arr) {
    return Array.isArray(arr) ? 'is an array' : 'is not an array';
}
console.log('a ' + getTypeOfArray(a));
console.log('b ' + getTypeOfArray(b));

// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
function multiplyTraditional(arr, multiplier) {
    for(let i = 0 ; i < arr.length; i++) {
        arr[i] = arr[i] * multiplier;
    }
    return arr;
}
console.log(multiplyTraditional(a, 2));

// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'


// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]


// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'