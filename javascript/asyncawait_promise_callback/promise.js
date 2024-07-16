//                                                   promise




//to overcome with this callback hell problem , promises comes in the picture
//promise   = it has three state pending,resolve and reject

/*let promise = new Promise((resolve , reject) => {
    console.log("this is promise");
    //reject("sorry your order is reject");
    resolve("yeh ! your order successfull delever");
})
console.log(promise)
*/



//how to use promise in the callback hell 
function getdata(dataid,getnextdata){
    promise2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data =",dataid);
            resolve("success")
            if(getnextdata){
                getnextdata();
            }
        }, 5000);
        
    })
}

let promisedata = getdata(100);
console.log(promise2);
//console.log(promise2)   run this line in the console after 5 second 



//promise.then()           and           promise.catch()
let funpromise = () =>{
    return new Promise((resolve , reject) => {
        console.log("this is promise");
        //reject("sorry your order is reject");
        resolve("yeh ! your order successfull delever");
    })
}
let promise = funpromise();
promise.then((res)=>{       // .then() is used when we want to do some function after fullfuild the promise
    console.log("promise completed ",res);
})                       //res and err this is bydefault parameter which store resolve and reject value
promise.catch((err)=>{      // .catch() is used when we want to do some function after rejection of promise
    console.log("oops so sorry your promise is rejected",err);
})
