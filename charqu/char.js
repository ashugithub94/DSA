


function submit(){
    debugger

    let a = document.getElementById('char').value
    console.log(a)

    const obj ={}

    for(const s of a){

        if(obj[s]){
            obj[s]=  obj[s]+1
        }else{
            obj[s] = 1
        }



    }
console.log(obj ,"ashu")

}