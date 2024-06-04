// TASK-G

function getHighestIndex(numArr){
    let max = 0;
    for(let i=0; i<numArr.length; i++){
        if (numArr[i]>max)
            max = numArr[i];
    }
    return numArr.indexOf(max);
}

let numArr = [5,21,12,61,8]
console.log(getHighestIndex(numArr));