/* 
    First Task
*/

let option = "0";
let text = "";

do {
    option = prompt("Odeberi redni broj algoritma kojeg zelis izvrsiti:\n1 \u2BC8 Reverse\n2 \u2BC8 Max\n3 \u2BC8 Capitalize\n4 \u2BC8 Ordered Reverse\nKRAJ \u2BC8 Kraj programa").toLowerCase();
    // zbog nekog razloga mi ne rade \t ni \u2BC8 - strelice
    
    switch(option) {
        case "1":
            text = prompt("Unesite tekst za algoritam: ")
            alert("Reversed '" + text + "': " + ReverseString(text));
            break;
        case "2":
            text = prompt("Unesite tekst za algoritam: ")
            alert("Max character in '" + text + "': " + MaxChar(text));
            break;
        case "3":
            text = prompt("Unesite tekst za algoritam: ")
            alert("Capitalized '" + text + "': " + Capitalize(text));
            break;
        case "4":
            text = prompt("Unesite tekst za algoritam: ")
            alert("Ordered reverese '" + text + "': " + OrderedReverse(text));
            break;
        case "kraj":
            let endConfirmation = confirm("Are you sure you want to close this program?");
            if(endConfirmation) alert("End!");
            else option = "";
            break;
    }

} while (option != "kraj");

/*
    Functions
*/


function ReverseString(string) {
    let reversedString = "";
    for(let i = string.length - 1; i >= 0; i--)
        reversedString += string[i];

    return reversedString;
}

function MaxChar(string) {
    let maxChar = "";
    let maxCount = 0;
    let counter = 0;

    for(let i = 0; i < string.length; i++) {
        for(let j = 0; j < string.length; j++)
            if(string[i] === string[j])
                counter++;

        if(counter > maxCount) {
            maxCount = counter;
            maxChar = string[i];
        }

        counter = 0;
    }

    return maxChar;
}

function Capitalize(string) {
    let capitalizedString = string[0].toUpperCase();

    for(let i = 1; i < string.length; i++) {
        if (string[i-1] == " ") 
            capitalizedString += string[i].toUpperCase();
        else 
            capitalizedString += string[i].toLowerCase();
    }

    return capitalizedString;
}

function OrderedReverse(string) {
    let reversedWord = " ";
    let orderedReversedString = "";

    for(let i = 0; i < string.length; i++) {
        reversedWord += string[i];

        if (string[i+1] === " " || !string[i+1]) {
            orderedReversedString += ReverseString(reversedWord);
            reversedWord = "";
        }
    }

    return orderedReversedString;
}   

/*
    Second Task
*/

    array = [
        {
            name: "Luke Skywalker",
            height: 172,
            mass: 77,
            hair_color: "blond",
            skin_color: "fair",
            eye_color: "blue",
            birth_year: "19BBY",
            gender: "male"
        },
        {
            name: "C-3PO",
            height: 167,
            mass: 75,
            hair_color: "n/a",
            skin_color: "gold",
            eye_color: "yellow",
            birth_year: "112BBY",
            gender: "n/a"
        },
        {
            name: "R2-D2",
            height: 96,
            mass: 32,
            hair_color: "n/a",
            skin_color: "white, blue",
            eye_color: "red",
            birth_year: "33BBY",
            gender: "n/a"
        },
        {
            name: "Darth Vader",
            height: 202,
            mass: 136,
            hair_color: "none",
            skin_color: "white",
            eye_color: "yellow",
            birth_year: "41.9BBY",
            gender: "male"
        },
        {
            name: "Leia Organa",
            height: 150,
            mass: 49,
            hair_color: "brown",
            skin_color: "light",
            eye_color: "brown",
            birth_year: "19BBY",
            gender: "female"
    }];  

SortByHeight(array);
console.log(array);
console.log(AverageWeight(array))

function SortByHeight(arr) {
    arr.sort((element1, element2) => element1.height - element2.height);
}

function AverageWeight(arr) {
    let massTotal = 0;
    for(let character of arr){
       massTotal += character.mass;
   }
    return massTotal / arr.length;
}

var array;