'use strict'


let stringOfReduction = function(stringOne){
let cutString = stringOne.slice(0,30)
return `${cutString}...`
}

console.log(stringOfReduction('And I want to remember it. I never want to forget it.'))





let changeOfCase = function (string) {
  let newString='';
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase()) {
      newString += string[i].toLowerCase();
    } else if (string[i] === string[i].toLowerCase()) {
      newString += string[i].toUpperCase();
    }
  }
  return newString;
};

console.log(changeOfCase("'Be my Valentine"));





let parameterOfString = function (str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    obj.symbolsWithoutSpaces = str.replace(/ /g, "").length;
    obj.allSymbols = str.split("").length;
    obj.quantityOfWords = str.split(" ").length;
    if (str[i] === "?") {
      obj.sentenceType = "question";
    } else if (str[i] === "!") {
      obj.sentenceType = "affirmative";
    } else if (str.indexOf("not") + 1 || str.indexOf("don't") + 1) {
      obj.sentenceType = "negative";
    } else {
      obj.sentenceType = "null";
    }
  }
  return obj;
};

console.log(parameterOfString("my Valentine hi"));




/* let wordFilter = function (newString) {
    if (newString.indexOf('мат') + 1) {
      return  newString.replace(/мат/gi, "***");
    } else {
      return newString;
    }
};

console.log(wordFilter("мат привет мат Мат привет мАт матмат приветМат")); */




let changeOfCase = function (stringOrText, word) {
  let newStringForAlert = "";
  let stringWord = stringOrText.toLowerCase().split(' ');
  for (let i = 0; i < stringWord.length; i++) {
    if (stringWord[i]  === word.toLowerCase()) {
      newString += stringWord[i].replace(stringWord[i], "***") + ' ';
    } else if (stringWord[i] !== word) {
      newString += stringWord[i] + ' ';
    }
  }
  return newStringForAlert;
};

console.log(changeOfCase("Жопа жОпа привет жопа", "жопа"));
