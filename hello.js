var filter = function(arr, fn) {
    let newArr =[]
    for(let i =0;i<arr.length;i++){
       if(fn(arr))
    }
    return newArr
};

function firstIndex(n,i){

    return n > 10; 

}

arr = [0,10,20,30]

const newB = filter(arr,firstIndex)
console.log(newB);