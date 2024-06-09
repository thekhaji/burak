//MVC architectural pattern
//1. Browserdan routerga request keladi
//2. The task of Conroller is distrubuting request models to their own service models
//3. Model-Business Logic.  There are two types of models:
//       Service Model=> it works for controllers
//       Schema Model=>it is designed to work with databases
//       


// console.log("H-TASK");

// function getPositive(arrNum:number[]){
//     let posNums:string = "";
//     arrNum.map((e)=>{
//         if(e>=0)
//             posNums+=e;
//     });

//     return posNums;
// }

// console.log(getPositive([1, -4, 2]));

console.log("H2-TASK");

function getDigits(word:string){
    let digits: String = "";
    for(let i=0; i<word.length; i++){

        switch(word[i]){
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                digits=digits+word[i];
                break;
        }
                
    }

    return digits;
}

console.log(getDigits("m12i1t"));


