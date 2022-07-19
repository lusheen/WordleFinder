let myArgs = process.argv.slice(2);
let fs = require('fs');
let counter = 0; 
let grey = myArgs[0];
let yellow = myArgs[1];
let greenandspot = myArgs[2];
let nospots1 = myArgs[3];
let nospots2 = myArgs[4];
let nospots3 = myArgs[5];
let nospots4 = myArgs[6];
let nospots5 = myArgs[7];
console.log("grey letters " + grey);
console.log("yellows letters " + yellow);
console.log("green letters " + greenandspot);

if (yellow == "-"){
    yellow = '' ;
}
console.log("yellows letters " + yellow);
let filename = "words.txt";
//It will read words.txt as one string and it will come out as a list each word on a new line
let wordlewords = fs.readFileSync(filename, 'utf8').split('\n');
//It filters for word with an E and a T
wordlewords.forEach((wordleword, index) => {
    let good = true;
    for(let i = 0; i < grey.length; i++) {
        if (wordleword.includes (grey.charAt(i))){
            good = false;
        }
    }
    for(let n = 0; n < yellow.length; n++) {
        if(!wordleword.includes (yellow.charAt(n))){
            good = false;
        }
    }
    for(let u = 0; u < greenandspot.length; u++) {
        if(greenandspot.charAt(u) == '-'){
            //do nothing
        } else if(wordleword.charAt(u) != (greenandspot.charAt(u))){
            good = false;
        }
    }
    for(let n = 0; n < yellow.length; n++) {
        let found = false;
        for(let u = 0; u < greenandspot.length; u++) {
            if(greenandspot.charAt(u) == '-'){
                if(yellow.charAt(n) == wordleword.charAt(u)){
                    found = true;
                }
            }
        }
        if(found == false){
            good = false;
        }
    }
    if(nospots(nospots1, wordleword) || 
       nospots(nospots2, wordleword) || 
       nospots(nospots3, wordleword) || 
       nospots(nospots4, wordleword) || 
       nospots(nospots5, wordleword)) {
       good = false;
    }
    if (good) {
        counter++;
        console.log(counter + ". " + wordleword);
    }
});
let total = 1/counter *100;
let finalTotal = total.toFixed(2);
console.log(finalTotal + "%");



function nospots(nospots, wordleword) {
    let hasaproblem = false;
    if(nospots != undefined) {
        for(let y = 0; y < nospots.length; y++) {
            if(nospots.charAt(y) == '-') {
                //do nothing
            } else if(wordleword.charAt(y) == (nospots.charAt(y))) {
                hasaproblem = true;
            }
        }
    }
    return hasaproblem;
}