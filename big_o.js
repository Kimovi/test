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