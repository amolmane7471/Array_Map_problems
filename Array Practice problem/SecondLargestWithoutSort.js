let numberArray = new Array();
let largestNumber = 100;
let secondLargestNumber = 100;
let smallestNumber = 999;
let secondSmallestNumber = 999;

function generateRandomNum(){
    return Math.round(Math.random() * 899 + 100);
}

console.log("The Generated Array is:")
for (let i = 0 ; i < 10 ; i++){
    numberArray.push(generateRandomNum());
    console.log(numberArray[i] + " ");
}

for(i = 0 ; i < numberArray.length ; i ++){
    let currentElement = numberArray[i];
    if(currentElement > largestNumber)
        largestNumber = currentElement;

    if(currentElement < smallestNumber)
        smallestNumber = currentElement;
}

for(i = 0 ; i < numberArray.length ; i ++){
    let currentElement = numberArray[i];
    if(currentElement > secondLargestNumber && currentElement < largestNumber)
        secondLargestNumber = currentElement; 

    if(currentElement < secondSmallestNumber && currentElement > smallestNumber)
        secondSmallestNumber = currentElement;
}

console.log("Second Largest Element : " + secondLargestNumber);
console.log("Second Smallest Element : " + secondSmallestNumber);
