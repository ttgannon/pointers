// add whatever parameters you deem necessary
function constructNote(message, letters) {
    if (!letters.length) {
        return false;
    }
    let numLetters = {};
    for (let letter of letters) {
        numLetters[letter] ? numLetters[letter] += 1 : numLetters[letter] = 1;
    }

    for (let letter of message) {
        if (numLetters[letter])  {
            numLetters[letter] -= 1
         } else {
            return false;
         } 
    }

    return true;
}

module.exports = {constructNote};