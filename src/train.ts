console.log("H-TASK");

function getPositive(arrNum:number[]){
    let posNums:string = "";
    arrNum.map((e)=>{
        if(e>=0)
            posNums+=e;
    });

    return posNums;
}

console.log(getPositive([1, -4, 2]));
