// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.

const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

describe("convertLetters", () => {
    it("returns a coded message", () => {
        expect(convertLetters(secretCodeWord1)).toEqual('L4ck4d41s1c4l')
        expect(convertLetters(secretCodeWord2)).toEqual('G0bbl3dyg00k')
        expect(convertLetters(secretCodeWord3)).toEqual('3cc3ntr1c')
    })
})
            // FAIL  ./code-challenges.test.js
            // convertLetters
            //   ✕ returns a coded message (1 ms)
            // ● convertLetters › returns a coded message

// b) Create the function that makes the test pass.

// PSEUDO CODE:
// Create a function named convertLetters
// Input: takes in a string
// Output: returns a coded message. 
// If a word contains the letters a, e, i, and o, lower case or upper case, these letters must be converted into numbers such as 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.
// the given values have a data type string, it needs to be converted into an array
// once, it is an array, the elements can be iterated to check if they are equal to the letters that needs to be converted.
// convert the array letters into the corresponding numbers using conditional statements
// if the letters doesn't fall into what needs to be changes, return the same value
// convert the array of letters into a string
// Expected output is a coded message with data type of string

const convertLetters = (string) => {
    changeToArray = string.split("")
    const changeVowel = changeToArray.map(value => {
        if (value === 'a' || value === 'A') {
            return '4';
        } if (value === 'e' || value === 'E') {
            return '3'
        } if (value === 'i' || value === 'I') {
            return '1'
        } if (value === 'o' || value === 'O') {
            return '0'
        } else
            return value
      });
    return changeVowel.join('')
}
        // PASS  ./code-challenges.test.js
        // convertLetters
        //   ✓ returns a coded message (2 ms)


// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

const letterA = "a"
// Expected output: ["Mango", "Apricot", "Peach"]
const letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

describe("selectWords", () => {
    it("returns an array of all the words containing that particular letter", () => {
        expect(selectWords(fruitArray, letterA)).toEqual(["Mango", "Apricot", "Peach"])
        expect(selectWords(fruitArray, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
})
            // FAIL  ./code-challenges.test.js
            // selectWords
            //   ✕ returns an array of all the words containing that particular letter (1 ms)
            // ● selectWords › returns an array of all the words containing that particular letter

// b) Create the function that makes the test pass.

// PSEUDO CODE:
// Create a function named selectWords
// Input: takes in an array and a single a letter
// Output: returns an array of all the words containing that particular letter 
// Create a function with parameters array and a letter
// Create an empty array that will take strings of selected words
// Check the letters of each value whether each value includes parameter letter
// The parameter letter has to have 1. letter and 2. letter to be in uppercase to check if there are any upper case letters in the value being checked
// Once the value is determined to have the parameter letter, the value will be pushed to the empty array
// Expected output is an array of selected words.

const selectWords = (array, letter) => {
    arrWord = []
    const containLetter = array.map(element => {
        if (element.includes(letter) || element.includes(letter.toUpperCase())) {
            return true && arrWord.push(element)
        }   
    })
    return arrWord
}

            // PASS  ./code-challenges.test.js
            // selectWords
            //   ✓ returns an array of all the words containing that particular letter (3 ms)

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false
const hand4 = [7, 2, 7, 2, 7]
// Expected output: true

describe("fullHouse", () => {
    it("determines whether or not the array is a full house", () => {
        expect(fullHouse(hand1)).toEqual(true)
        expect(fullHouse(hand2)).toEqual(false)
        expect(fullHouse(hand3)).toEqual(false)
        expect(fullHouse(hand4)).toEqual(true)
    })
})

// b) Create the function that makes the test pass.

// PSUEDO CODE:
// Create a function named fullHouse
// Input: takes in an array of 5 numbers
// Output: determines whether or not the array is a “full house”
// check each value in the given array
// determine if there are 3 values of the same number and another 2 values of the same number by counting the instances of appearance of a card
// return true if the set is complete - meaning its a full house
// return false if it's not a full house

class Card{
    constructor(key){
        this.key = key
        this.count = 1        
    }
    addCard(){
        this.count += 1
    }
}

const fullHouse = (array) => {
    sameCards = []
    array.map(value => {
        let found = false
            found = sameCards.find(card => {
                if (card.key === value){
                    return true
                }else {
                    return false
                }                
            }) 
            if (found){
                found.addCard()
            } else {
                sameCards.push(new Card(value))  
            }
            return sameCards
    })  
    if ((sameCards[0].count === 3 && sameCards[1].count === 2) || (sameCards[0].count === 2 && sameCards[1].count === 3)) {
        return true
    } else {
        return false
    }     
}  
        // PASS  ./code-challenges.test.js
        // fullHouse
        //   ✓ determines whether or not the array is a full house (3 ms)
