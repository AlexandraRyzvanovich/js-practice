/*first*/
const date= new Date(2020,6,1,0,0,0,0,2020);
function getDate(seconds) {
    seconds = date.getSeconds() + seconds;
    return date + seconds;
}
console.log({date})

