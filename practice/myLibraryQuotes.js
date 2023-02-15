function myLibraryQuotes(){//4次元配列の練習
    // 本棚 1 の本
    let book1Quotes = [
        "Let all of life be an unfettered howl.",
        "Our lives were just beginning, our favorite moment was right now, our favorite songs were unwritten.",
        "You were born to stand out, stop trying to fit in.",
        "Do not wait for the last judgment. It comes every day.",
    ];

    let book2Quotes = [
        "It is not a religion. It is a relationship.",
        "The choice is yours. Don't let your pronouncements destroy your destiny rather let them build your future up!",
        "Poetry is born; When the relationships begin to melt on the slow flame of the eyes.",
        "Fatherhood is sacred."
    ];

    let book3Quotes = [
        "Marriage is a partnership; not a sole proprietorship.",
        "She was soft rock that suddenly turned hard.",
        "A human is the one, who would give up a thousand Cleopatras to be with the person he or she loves.",
        "You read between the wrong lines."
    ];

    let bookshelf1 = [book1Quotes, book2Quotes, book3Quotes];

    // 本棚 2 の本
    let book4Quotes = [
        "Everything you want in life is a relationship away.",
        "Life!Even though it's black and white, it's still fairly colorful.",
        "To question reason is to trust it.",
        "La prueba de ausencia no es prueba de ausencia",
        "Not how the world is, but that it is, is the mystery.",
    ];

    let book5Quotes = [
        "Confuse them with your silence. Shock them with your results.",
        "All statistics have outliers.",
        "The moon fascinates us in her simplicity.",
        "Anything you're good at contributes to happiness."
    ];

    let book6Quotes = [
        "Confuse them with your silence. Shock them with your results.",
        "All statistics have outliers.",
        "The moon fascinates us in her simplicity.",
        "Anything you're good at contributes to happiness."
    ];

    let book7Quotes = [
        "Don't write to sell, write to tell.",
        "Slowly we became silent, and silence itself if an enemy to friendship.",
        "Without the sun I am cold.Without your smile I am lost.",
        "You are the softness of the morning dew!"
    ];

    let bookshelf2 = [book4Quotes, book5Quotes, book6Quotes, book7Quotes];

    // 本棚 3 の本
    let book8Quotes = [
        "The Heart wants what it wants - or else it does not care",
        "You have a beautiful laugh. Like the promise of tomorrow.",
        "You'll never be able to let him go. You'll always feel wrong about being with me."
    ];

    let book9Quotes = [
        "The voice of Love seemed to call to me, but it was a wrong number.",
        "Do not allow me to forget you",
        "Education consists mainly of what we have unlearned."
    ];

    let book10Quotes = [
        "LIFE - Death's Very Emissary",
        "To conquer fear, you must become fear.",
        "Meditation is the energy of the mind,"
    ];

    let bookshelf3 = [book8Quotes, book9Quotes, book10Quotes];
    return [bookshelf1,bookshelf2,bookshelf3];
}

function libraryQuotePrinter(libraryArray){
    let printString = "";
    for(let i = 0; i < libraryArray.length; i++){
        for(let j = 0; j < libraryArray[i].length; j++){
            for(let k = 0; k < libraryArray[i][j].length; k++){
                printString += '"';
                for(let l = 0; l < libraryArray[i][j][k].length; l++){
                    printString += libraryArray[i][j][k][l] + "-";
                }
                printString += '",';
            }
        }
    }
    console.log(printString);
}

function getMaxQuoteFromBook(book){
    let maxLength = book[0].length;
    let targetQuote = book[0];

    for(let i = 1; i < book.length; i++){
        if(book[i].length >= maxLength){
         maxLength = book[i].length;
         targetQuote = book[i];   
        }
    }
    return targetQuote;
}

function getLongestQuotes(libraryArray){
    let res = [];
    for(let i = 0; i < libraryArray.length; i++){
        for (let j = 0; j < libraryArray[i].length; j++){
            res.push(getMaxQuoteFromBook(libraryArray[i][j]));
        }
    }
    return res;
}

let library4dList = myLibraryQuotes();
console.log(getLongestQuotes(library4dList));