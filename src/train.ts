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
function removeDuplicate(str: string){
    let index = 0;
    let arrStr = str.split("");
    let newStr = [];
    console.log("initial:",arrStr);
    
    for (let i = 0; i < arrStr.length; i++)
    {
        let j;
        for (j = 0; j < i; j++) 
        {
            if (str[i] == str[j])
            {
                break;
            }
        }

        if (j == i) 
        {
            newStr[index++] = str[i];
            console.log("inner: ",newStr);
            
        }
    }
        
        return newStr.join("");
}

console.log(removeDuplicate('stringg'));
