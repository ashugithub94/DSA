let arr =[1,2,3,4,5]
let arr2 =[5,6,7,7,8,9]
let arr3=[]

for(let i=0;i<arr.length;i++){
 arr3.push(arr[i]);
    

}

for(let i =0; i<arr2.length;i++){
    arr3[arr.length+i] =arr2[i]

}
console.log(arr3,"djd")

const l3 =[...arr,...arr2]

console.warn(l3);