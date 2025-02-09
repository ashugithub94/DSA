let arr1 =[1,4,6,8,9,12,14]
let arr2 =[2,3,5,10]
let arr3 =[]
let a1 =0;
let a2 =0
let a3 =0;

while (a1<arr1.length || a2<arr2.length) {

    if (arr1[a1]<arr2[a2]) {
        arr3.push(arr1[a1])
        a1++
        
    } else {
        arr3.push(arr2[a2])
        a2++
        
    }
    a3++
    
}
while (a1<arr1.length ){

    arr3.push(arr1[a1])
    a1++

    a3++

}
console.log(arr3)