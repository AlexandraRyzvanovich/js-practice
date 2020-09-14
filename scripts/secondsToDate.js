/*first*/
const date = new Date(2020, 5, 2, 0, 0, 0, 2020);

function secondsToDate(seconds) {
    date.setTime(date.getTime() + seconds * 1e3)
    return date;
}

module.exports = secondsToDate;