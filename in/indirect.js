
// let x = 100
// function buyapple(x) {

//     if(x>0){
//      buymore(x)
//      console.warn(x)
//     }else{

//         console.warn(`more money`)

//     }
    
// }

// function buymore(x) {
//    x=x-10
//    buyapple(x) 
    
// }

//buyapple(100)

// var createCounter = function(n) {
 
//     return function(n) {
//      n++
        
//     };
// };

var createCounter = function(n) {
    
    return function cou() {
        n++
        
    };
};
    



    const counter = createCounter(10)
   console.log(counter()) // 10
   console.log(counter())  // 11
   console.log(counter()) // 12
  

//indirect recursion me call inner one more function which call again first function