// callback = the function which pass to the another function as argurment is known as callback

function sum(a,b){
    console.log(a+b);
}
function calculator(a,b,sum){
    sum(a,b);
}

calculator(3,4,sum);


//callback hell = it arise when the we use the nested callback and program stuck in that peramide like structure

//Q) let suppose we are accessing the data from the database and its takes some time to fetch data
function getdata(dataid){
    setTimeout(() => {
        console.log("data",dataid);
    }, 3000);
}

getdata(1);     //here delay is not working becouse all the function execute symultaniusly
getdata(2);
getdata(3);

//let suppose if we want to display data if the previous data is found with the delay
function getdata(dataid,getnextdata){
    setTimeout(() => {
        console.log("data",dataid);
        if(getnextdata){
            getnextdata();
        }
    }, 3000);
}
console.log("getting 1 data");     //this type structure is very comlecated thats why it is callback hell
getdata(1,()=>{
    console.log("geting 2 data");
    getdata(2,()=>{
        console.log("geting 3 data");
        getdata(3,()=>{
            console.log("geting 4 data");
            getdata(4);
        })
    })
})



