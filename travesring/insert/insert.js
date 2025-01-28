let arr = [1,2,3,4,5]

let insp = 2

for(let i = arr.length-1;i>=insp;i--){
if(i>=insp){
    arr[i+1]=arr[i]

    if(i==insp){
        arr[i] = 20;
    }
}
console.log(arr[i])
}
console.log(arr)


function insertele(){

    let brr =[1,2,3,45,6]

    const newposition =parseInt(document.getElementById('no').value);
    const newEle = parseInt(document.getElementById('ele').value);

    if(isNaN(newposition) || isNaN(newEle)){
        alert("PLEASE GIVVE A VALID INPUT")
        return;

    }

    for(let i = brr.length-1; i>=0; i--){
        if(i>=newposition){
            brr[i+1]=brr[i]
            if(i == newposition){
                brr[i]=newEle

            }
        }

    }
console.table(brr)
}