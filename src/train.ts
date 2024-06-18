/*  
    Project Standards:
        -Logging standards
        -Naming standards
            CamelCase: function, method, variable
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




// function marjorityElement(arr: number[]){
//     arr.sort();
//     let count = 1, max=0, element;
//     for (let i = 1; i < arr.length; ++i) {
//         if (arr[i] === arr[i - 1]) {
//             count++;
//         } else {
//             count = 1;
//         }
//         if (count > max) {
//             max = count;
//             element = arr[i];
//         }
//     }
//     return element;
// }

// console.log(marjorityElement([1,2,3,4,5,4,3,4]));




/* 
    Traditional Frontend Development => BSSR(Adminka) => EJS
    Modern Frontend Development => SPA(User)  => REACT(json) 
*/