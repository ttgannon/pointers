// add whatever parameters you deem necessary
function sameFrequency(num1Int, num2Int) {
    let num1 = num1Int.toString();
    let num2 = num2Int.toString();

    if (num1.length !== num2.length) {
        return false;
    }

    let numCounts = {};

    for (let number of num1) {
        if (number in numCounts) {
            numCounts[number] += 1;
        } else {
            numCounts[number] = 1;
        }
    }

    for (let number of num2) {
        if (number in numCounts) {
            numCounts[number] -= 1;
        } else {
            return false;
        }
    }

    return !!numCounts;
}

module.exports = {sameFrequency}
