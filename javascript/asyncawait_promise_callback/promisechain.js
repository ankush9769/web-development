// promisechain

/*let asyncfun1= ()=>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data 1");
            resolve("success")
        }, 3000);
    })
}

let asyncfun2= ()=>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data 2");
            resolve("success")
        }, 3000);
    })
}
//Q)if we want to fetch the data 2 after the fetching the data 2 successfully eg.instragram id and password
console.log("fetching data 1....");
let p1 = asyncfun1();
p1.then((res)=>{           
    console.log(res);
    console.log("fetching data 2...");
    let p2 = asyncfun2();   //in 1 .then() the another .then() is present which is known as promisechain
    p2.then((res)=>{
        console.log(res);
    })  
})
    */



//the given problem can be done by the promisechain
function getdata(dataid){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data =",dataid);
            resolve("success")
        }, 5000);
    })
}

getdata(1).then((res)=>{         // this struture is also known as promisechain
    console.log(res);
    getdata(2).then((res)=>{
        console.log(res);
        getdata(3).then((res)=>{
            console.log(res);
        })
    })
})
    



