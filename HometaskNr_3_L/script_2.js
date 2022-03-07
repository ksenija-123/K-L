//find the palindrome
function palindromeCheck(string) {
    const array = string.toLowerCase().split("");
    const reverseArray = array.reverse();
    const reverseString = reverseArray.join("");
    if (string.toLowerCase() == reverseString) {
        alert(`"${string}" is a palindrome`)
    }else 
        alert(`"${ string}" is not a palindrome`)
}

let palindrome = prompt("Give me a string to check if it is a palindrome")
alert("Thank you!")
palindromeCheck(palindrome)

//print the anagram

function toAnagram(string) {
    const array = string.split(" ");
    let newString = "";
    for (i = 0; i < array.length; i++){
        newString += array[i][0]
    }
    alert(`The anagram of "${string}" is ${newString.toUpperCase()}.`)
    console.log(newString.toUpperCase())
}
let anagram = prompt("Give me a string to turn into an anagram.")
alert("Thank you!")
toAnagram(anagram)

//count words in the string

function countWords(string) {
    const array = string.split(" ");
    console.log(array.length);
    alert(`There are ${array.length} words in this sentence: "${string}".`);

}
let sentence = prompt("Give me a sentence and I will tell you how many words there are")
countWords(sentence)


//print maximal occuring character in the string

function maxChar(string) {
    const array= string.toLowerCase().split("");
    let library = {};
    for (i=0;i<array.length;i++){
        if (array[i] in library) {
            library[array[i]] += 1;
            console.log(library);
        }else {
            library[array[i]] = 1;
            console.log(library);
        }
    }
    sortable = [];
    for (let letter in library) {
        sortable.push([letter, library[letter]]);
    }
    sortable.sort(function(a, b) {
        return b[1] - a[1];
    });

    alert(`The most common character is "${sortable[0][0]}" and it shows ${sortable[0][1]} times.`)
    console.log("The max character is " + sortable[0][0] + " and it shows " + sortable[0][1]+ " times.")
}
let characters = prompt("Give me a string and I will give you the most common character")
maxChar(characters);
