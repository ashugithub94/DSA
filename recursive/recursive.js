function recurs(a){
 if(a == 1){
    return 1;

 }  
 
 return a*recurs(a-1);

}

console.log(recurs(5))

let a = 5
for (let index = 5; index >1; index--) {

  a *= index-1
    
}
console.log(a,"hie")