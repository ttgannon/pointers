// add whatever parameters you deem necessary
function twoArrayObject(arr1, arr2) {
    let newObj = {}
    for (let i=0; i < arr1.length; i++) {
        if (arr2[i]) {
            newObj[arr1[i]] = arr2[i];
        } else {
            newObj[arr1[i]] = null;
        }
    }
    return newObj;
}

module.exports = {twoArrayObject}