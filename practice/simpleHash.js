function simpleHash(inputString){
    let numberRepresentation = 0;
    for(let i = 0; i < inputString.length; i++){
        //各文字のasciiコードを加算していく
        numberRepresentation += inputString.charCodeAt(i);
    }
    return numberRepresentation;
}

console.log(simpleHash("Rock'n Roll!!"));