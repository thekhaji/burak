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

//ZK-TASK

function printNumbers() {
    let startTime = Date.now();
    let intervalId: any;

    function print() {
        const currentTime = Date.now();
        const elapsedTime = (currentTime - startTime) / 1000;
        
        if (elapsedTime > 5) {
            clearInterval(intervalId); 
            return;
        }


        for (let i = 1; i <= 5; i++) {
            console.log(i);
        }
    }


    intervalId = setInterval(print, 1000);
}

printNumbers();


    
