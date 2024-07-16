// function

function myfun(msg){       //declaring the function 
    console.log(msg);
    console.log("jai shree balajee");
}

myfun("pyar se boliye");   // calling the function

//Q) create the function which is use for sum
function addition(x,y){
    console.log("addition =",(x+y));
}
addition(12,56);

//same things you can do with arrow function
const ans = (a,b) =>{
    return a + b;
};

console.log(ans(10,20));

let printing = () => {
    console.log("this is arrow function");
}
printing();



// #) forEach loop in Array  = this forEach is also known as higher order function/methods
// syntax = arr.forEach(callBackFunction)
// callBackfunction = callback is a function that passed the argument to another function


//  arr.forEach((val)=>{
//     console.log(val);
//  })
let arr = [1,2,3,4,5];
arr.forEach(function myfun(val){ // val = value at each index 
    console.log(val)
});

//we can also do like this way
arr.forEach((var1)=>{
    console.log(var1);
});



let city = ["mumbai","goa","pune","delhi"];
city.forEach((var2,indx,city)=>{
    console.log(indx,var2,city);
})

//Q)print the square of each element of array by using forEach
let num = [1,2,3,4,5];
num.forEach((var3)=>{
    console.log(var3*var3);
})



//arr.map() is also a similar to arr.forEach() but arr.map() create one new arr for storing new element 
let num3 = [1,2,3,4,5];
let newnum3=num3.map((var4)=>{
    return var4*var4;
})
console.log(newnum3);


//arr.filter() it is use to filter the array by certain condition
let num4 = [1,2,3,4,5,6,7,8,9,10];
let newnum4 = num4.filter((var5)=>{
    return var5%2==0;
})
console.log(newnum4);

