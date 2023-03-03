/*
    Palidroma
        Chiedere all’utente di inserire una parola
        Creare una funzione per capire se la 
        parola inserita è palindroma
*/

const userWord = prompt('scrivi qualcosa, vediamo un po\' se è palindroma:');
console.log('hai scelto: ' + userWord + ' vediamo se al contrario è uguale');
let result = isItPalindrom(userWord);
console.log(result);

function isItPalindrom (word){

    let defaultWord = "";
    let reverseWord = "";

    for(i = 0; i < word.length; i++){

        defaultWord += word[i].trimStart();
        console.log('default: ' + defaultWord);
        
    }

    for(i = word.length - 1 ; i >= 0; i--){

        reverseWord += word[i].trimEnd();
        console.log('reverse: ' + reverseWord)
    }

    if(defaultWord == reverseWord){
        return "la parola che hai scelto è palindroma";
    } else{
        return "la parola che hai scelto non è palindroma";
    }

}