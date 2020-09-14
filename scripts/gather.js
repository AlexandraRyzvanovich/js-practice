/*Eighth*/
function gather(str) {
    let strArray = str;
    let orderArray = [];
    function get() {
        let result = '';
        for(let i = 0; i < orderArray.length; i++) {
            result += strArray[orderArray[i]];
        }
        return result;
    }
    function order(number) {
        orderArray.push(number);
        order.get = get;
        return order;
    }
    function innerGather(str1) {
        strArray += str1;
        return innerGather;
    }
    innerGather.order = order;

    return innerGather;
}
module.exports = gather;