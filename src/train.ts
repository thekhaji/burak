/*  
    Project Standards:
        -Logging standards
        -Naming standards
            CamelCase: function, method, letiable
            Pascal: class
            Kebab Case: folder
            SNAKE: css
        -Error handlings
        
    API -> Application Programming Interface
    Tradition API
    REST API
    GraphQL API
    ...

 */


// import cluster from "cluster";

// if(cluster.isMaster){
//     console.log("Main THREAD with process ID:", process.pid);
    
//     const cpus = require("os").cpus();
//     cpus.map(()=>{
//         cluster.fork();
//     }); 
// }
// else{
//     console.log("Worker THREAD with process ID:", process.pid);
// }

/* 
    Traditional API
    Rest API
    GraphQL APi
    ...
*/




/* 
    Traditional Frontend Development => BSSR(Adminka) => EJS
    Modern Frontend Development => SPA(User)  => REACT(json) 
*/


/*
    cookies joins each requests
    cookies are self distructive
    cookes are the most secure browser db 
 */

/* 
    Validation:
        Frontend validation
        Pipe validation
        Backend validation
        Database validation
*/

/*
    ZI-TASK
 */
//ZJ-TASK

function reduceNestedArray(numbers: any[]){
    let sum = 0;
    for(let i=0; i<numbers.length; i++){
        if(Array.isArray(numbers[i])){
            sum += reduceNestedArray(numbers[i]);
        }
        else if(typeof numbers[i] === 'number')
            sum+=numbers[i];
    }

    
    return sum;
}

console.log(reduceNestedArray([1, [1, 2, [4]]]));

    
