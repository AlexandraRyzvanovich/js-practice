/*fifth*/
function redundant(string) {
    return function () {
        return string;
    };
}

module.exports = redundant;
