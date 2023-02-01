// Rain Water trap Problem------------------>

// |
// | |   |
// |_|_|_|
const array =[3, 2, 1, 2,4,3,1];

// |       |
// | |   | |
// |_|_|_| |
// const array =[3];

const arrayresult=[];

// var sum=0;
var length = array.length;
console.log(length)

if(length>=2){

    for(let i=0;i<length;i++){
        
    if(array[i]>array[i+1]){
        console.log(array[i+1]+"unit of Water");
        arrayresult.push(array[i+1])
    }
    else if(array[i-1]<array[i]){
        
        console.log(array[i-1]+"unit of Water");
        arrayresult.push(array[i-1])

    }

}
}
else{
    console.log("can not store water");
}
var sum =0;
for(let i=0;i<arrayresult.length;i++){
    sum=sum+arrayresult[i];
}
console.log(sum)