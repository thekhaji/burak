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
    ZE-TASK
 */
function capitalizeWords(text: string){
    let arrStr = text.split(" ");
    let newStr: string[] = [];
    console.log("initial:",arrStr);
    
    arrStr.map((ele)=>{
        if(ele.length>2)
            newStr.push(ele.charAt(0).toUpperCase() + ele.slice(1) );
        else
            newStr.push(ele);
    })
        
    return newStr.join(" ");
}

console.log(capitalizeWords('name should be a string'));
