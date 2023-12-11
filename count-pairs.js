// add whatever parameters you deem necessary
function countPairs(arr, num) {
    let numObj = {}
    let counter = 0;

    for (let item of arr) {
        if (num-item in numObj) {
            counter += 1;
        } else {
            numObj[item] = num-item;
        }
    }
    return counter;
}

module.exports = {countPairs}