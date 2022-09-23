const prompt = require("prompt-sync")();
let integerArray = new Array();
let flag = true;
let arraySize = prompt("Enter the size of the array : ");

console.log("Enter array values : ");
for(let i = 0; i < arraySize ; i++){
    integerArray[i]=parseInt(prompt());
}
console.log("The Array is : " + integerArray);

for (let i = 0; i < integerArray.length-2 ; i++) {
    for (let j = i + 1; j < integerArray.length-1 ; j++) {
        for (let k = j + 1; k <integerArray.length ; k++) {
            if(integerArray[i] + integerArray[j] + integerArray[k] == 0){
                console.log("Triplet Found");
                console.log("Elements are: " + integerArray[i] + " " + integerArray[j]+ " " + integerArray[k]);
                flag = false
            }
        }
    }    
}
if(flag == true ){
console.log("Triplet Not Found")
}

