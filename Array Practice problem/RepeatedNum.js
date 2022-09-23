let repeatedNumArray = new Array();

function checkPalindrome(number) {
    let reverseNum = number.toString().split("").reverse();
//    console.log(reverseNum)
    if (number == reverseNum.join("")) {
        return true;
    }
    else {
        return false;
    }
}

for(let i = 0 ; i <= 100 ; i++){
    if(i > 10 && checkPalindrome(i))
        repeatedNumArray.push(i);
}

console.log("The Number Array is : " + repeatedNumArray);