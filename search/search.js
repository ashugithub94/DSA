let data =[1,2,3,4,5,5,7]
let ele =5
let index =[]

for(let i =0; i<data.length;i++){
    if(data[i]==ele){
        index.push(i);

    }
}
console.warn(index)
//console.warn(data.indexOf(3));
//let b = data.splice(3,1)