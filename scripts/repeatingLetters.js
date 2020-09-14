/*fourth*/
function repeatingLetters(string) {
    let final = "";
    for (let i = 0; i <= string.length; i++) {
        final = final + string.charAt(i);
        if (string.indexOf(string[i]) === string.lastIndexOf(string[i])) {
            final = final + string.charAt(i);
        }
    }
    return final;
}

module.exports = repeatingLetters;
