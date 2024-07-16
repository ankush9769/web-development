//     async =always return the promise

async function hello(){
    console.log("hello");
}
hello();

//    await =await pause the  execution of its surrounding async function until the promise is settled
//                      and await function is only used in async function
function api(){
    setTimeout(()=>{
        return new Promise((resolve, reject) => {
            console.log("weather data");
            resolve(200)     //200 number represend the successfull done
        })
    },3000)
}
async function getweatherdata(){
    await api();   // 1rst time call
    await api();   // 2nd time call
}
getweatherdata();

// by using this we can also perform the previous problem
function getdata(dataid){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data =",dataid);
            resolve("success");
        }, 5000);
    })
}
async function getiddata(){
    console.log("geting the data 1")
    await getdata(12);
    console.log("geting the data 2")
    await getdata(34);
}
getiddata();