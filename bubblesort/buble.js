let arr =[3,42,4,25,70]

for(i =0;i<arr.length;i++){
    for(j=0;j<arr.length;j++){
        if(arr[j]<arr[j+1]){
        let temp=arr[j]
     
        arr[j]=arr[j+1]
      arr[j+1] =temp
        }
    }

}
console.log(arr)

let arr2 =[23,4,54,1,45]
console.log(arr2.sort((a,b) => b-a),"wk")



function add(...args){

return args.reduce((acc,reduce)=> acc+reduce,0)
}

const map =[1,2,5,6,7]
map.map( (e)=>e*2)


console.log(add(1,2,3,4))

