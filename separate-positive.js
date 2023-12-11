// add whatever parameters you deem necessary
function separatePositive(arr) {
    let negPoint = null;
    let posPoint = null;
    let isNeg = false;

    for (let i=0; i< arr.length; i++) {
        if (arr[i] < 0) {
            if (isNeg) {
                continue
            } 
            if (negPoint === null) {
                negPoint = i;
            }
            isNeg = true;
        } else {
            isNeg = false;
            posPoint = i;
            if (negPoint !== null) {
                let temp = arr[negPoint];
                arr[negPoint] = arr[i];
                arr[i] = temp;
                negPoint += 1;
            }
        }
        
    }
    console.log(arr);
    return arr;
}

module.exports = {separatePositive}
