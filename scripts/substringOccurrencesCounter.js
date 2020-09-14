/*third*/
function substringOccurrencesCounter(substring, text) {
    return text.match(substring).length + 1;
}

module.exports = substringOccurrencesCounter;