//#1
function combineWords(word1, word2) {
    return word1 + word2
}

var result = combineWords('dog', 'house');
console.log(result);
// displays 'doghouse'

//#2
function repeatPhrase(phrase, n) {
    for (var i = 0; i < n; i++) {
        console.log(phrase);
    }
}

repeatPhrase("Hello", 5);
// displays
// Hello
// Hello
// Hello
// Hello
// Hello

//#3
function toTheNthPower(number, power) {
    var result = 1;
    for (var i = 0 ; i < power; i++) {
        result *= number;
    }
    return result;
}

var result = toTheNthPower(4, 5);
console.log(result);
// displays 1024

//#4
function areaOfACircle(radius) {
    return Math.PI*radius*radius
}

var result = areaOfACircle(2);
console.log(result);
// displays approximately 12.57

//#5
function pythagoreanTheorem(a, b) {
    var result = Math.sqrt((a*a) + (b*b))
    return result
}

var result = pythagoreanTheorem(3, 4);
console.log(result);
// should display 5;

//#6
function isXEvenlyDivisibleByY(x, y) {
    if (x % y === 0) {
        return true
    }
    else {
        return false
    }
}

var result = isXEvenlyDivisibleByY(99, 3);
console.log(result);
// displays true

//#7
function countVowels(word) {
    var count = 0
    for (var i = 0; i < word.length; i++) {
        if (word[i] === "a" || word[i] === "e" || word[i] === "i" || word[i] === "o" || word[i] === "u") {
            count++;
        }
    }
    return count;
}

var result = countVowels("stealing");
console.log(result);
// displays 3

//#8
function findWdi(arr){
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 'wdi'){
        return true;
        }
       }
    return false;
    }

findWdi([9,'Bart Simpson', true, 'wdi']) // returns true
findWdi(['a','b','c']) // returns false
