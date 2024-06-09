//MVC architectural pattern
//1. Browserdan routerga request keladi
//2. The task of Conroller is distrubuting request models to their own service models
//3. Model-Business Logic.  There are two types of models:
//       Service Model=> it works for controllers
//       Schema Model=>it is designed to work with databases
//       


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
