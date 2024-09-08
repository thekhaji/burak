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

//ZQ-TASK

function countNumberAndLetters(str: string) {
    let result = { number: 0, letter: 0 };
  
    for (let i = 0; i < str.length; i++) {

      if (str[i] >= '0' && str[i] <= '9') {
        result.number++;
      }

      else if ((str[i] >= 'a' && str[i] <= 'z') || (str[i] >= 'A' && str[i] <= 'Z')) {
        result.letter++;
      }
    }
  
    return result;
  }
  
  console.log(countNumberAndLetters("string152%\\¥"));
  




  

    
