// Big O notation
// Example of O(n). Number of operations increases by the elements. 

const arr1 = ['Nemo'];
const arr2 = new Array(100).fill('Nemo');
function findNemo (input) {
    let t0 = performance.now();
    for(let i=0; i<input.length; i++) {
        console.log(input[i])
    }
    let t1 = performance.now();
    console.log('This function took '+(t1 - t0)+ ' to calculate');
}

findNemo(arr2);

// Example of O(1). Number of operation doesn't increase by the elements. 
function logArray (arr) {
    console.log(arr[0])
}

logArray(arr2);


// Big O rules
// O(a+b)
function compressBoxesTwice(boxes, boxes2) {
    //O(n)
    boxes.forEach(function(boxes) {
        console.log(boxes);
    });

    //O(n)
    boxes2.forEach(function(boxes) {
        console.log(boxes);
    });
}

// O(n^2)
const boxes = [1, 2, 3, 4, 5];

function logAllPairsOfArray(array) {
    for(let i=0; i<array.length; i++) {
        for(let j=0; j<array.length; j++){
            console.log(array[i], array[j]);
        }
    }
}

logAllPairsOfArray(boxes);


// Big O Cheat Sheet:
// -Big Os-

// O(1) Constant- no loops
// O(log N) Logarithmic- usually searching algorithms have log n if they are sorted (Binary Search)
// O(n) Linear- for loops, while loops through n items
// O(n log(n)) Log Liniear- usually sorting operations
// O(n^2) Quadratic- every element in a collection needs to be compared to ever other element. Two
// nested loops
// O(2^n) Exponential- recursive algorithms that solves a problem of size N
// O(n!) Factorial- you are adding a loop for every element

// Iterating through half a collection is still O(n)
// Two separate collections: O(a * b)

// -What can cause time in a function?-
// Operations (+, -, *, /)
// Comparisons (<, >, ==)
// Looping (for, while)
// Outside Function call (function())

// -Rule Book-
// Rule 1: Always worst Case
// Rule 2: Remove Constants
// Rule 3: Different inputs should have different variables. O(a+b). A and B arrays nested would be
// O(a*b)
// + for steps in order
// * for nested steps
// Rule 4: Drop Non-dominant terms

// -What causes Space complexity?-
// Variables
// Data Structures
// Function Call
// Allocations




// Space complexity
function boooo (n) {
    for (let i=0; i<n.length; i++) {
        console.log('booooo!');
    }
}

boooo([1,2,3,4,5]); // O(1)

function arrayOfHiNTimes(n) {
    let hiArray = [];
    for (let i=0; i<n; i++) {
        hiArray[i] ='hi';
    }
    return hiArray;
}

arrayOfHiNTimes(6); // O(n)


// Exercise Twitter
const array = [
    {tweet: 'hi', date: 2012}, 
    {tweet: 'my', date: 2014}, 
    {tweet: 'teddy', date: 2018}];
//O(n^2)
