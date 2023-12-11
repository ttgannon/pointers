// add whatever parameters you deem necessary
function averagePair(nums, avg) {
    let numsMap = new Map();  //diff between Map and object?
    for (let num of nums) {
        let target =  avg * 2 - num; 
        if (numsMap.has(target)) {
            return true;
        } else {
            numsMap.set(num, num);
            
        }
    }
    return false;
}

module.exports = { averagePair }
