getAvg = function (numbers) {
    var sum = 0
    for (i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i];
    }
    return sum / numbers.length
}

const testNumbers = [1, 4, 7];
const result = getAvg(testNumbers);
console.log(result);


getNumbers = function (orders) {
    var sum = 0
    for (i = 0; i < orders.length; i++) {
        sum = sum + orders[i];
    }
    return sum / orders.length
}

const testOrders = [10, 5];
const results = getNumbers(testOrders);
console.log(results);



getWaters = function (macs) {
    var sum = 0
    for (i = 0; i < macs.length; i++) {
        sum = sum + macs[i];
    }
    return sum / macs.length
}
const testAct = [1.5, 3, 2.5, 1,]
const res = getWaters(testAct);
console.log(res);
