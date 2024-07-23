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
    X-TASK
 */
function countOccurrences(obj: any, param: string){
    let count = 0;
    function recursiveCount(obj: any) {
        if (typeof obj === 'object' && obj !== null) {
          for (const k in obj) {
            if (k === param) {
              count++;
            }
            if (typeof obj[k] === 'object' && obj[k] !== null) {
              recursiveCount(obj[k]);
            }
          }
        }
      }
      recursiveCount(obj);

    return count;
}

console.log(countOccurrences({model: 'Bugatti', steer: {model: 'HANKOOK', size: 30}}, 'model'));
