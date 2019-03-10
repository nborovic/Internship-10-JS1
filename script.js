let option = "0";
let text = "";

do {
    option = prompt("Odeberi redni broj algoritma kojeg zelis izvrsiti:\n1 > Reverse\n2 > Max\n3 > Capitalize\n4 > Ordered Reverse\nKRAJ > Kraj programa").toLowerCase();
    
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