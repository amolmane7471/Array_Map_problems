function generateRandomNum(){
    return Math.round(Math.random() * 899 + 100);
}

let numberArray = new Array();

console.log("Generated Array is:")
for (let i = 0 ; i < 10 ; i++){
    numberArray.push(generateRandomNum());
    console.log(numberArray[i]);
}

numberArray.sort();
console.log("The Sorted Array is:")
for (let i = 0 ; i < 10 ; i++){
    console.log(numberArray[i]);
}

console.log("Second Largest Element : " + numberArray[8]);
console.log("Second Smallest Element : " + numberArray[1]);
