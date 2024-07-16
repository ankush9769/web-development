// syncronus programing = the program that run in the sequence line by line

console.log("first");
console.log("second");
console.log("three");


//asyncronus programing = if the code of line take more time for executing then it execute the next code of line with the that code
function hello(){
    console.log("hello");
}

console.log("we are waiting to print hello after 5 sec")

setTimeout(hello,5000);         // this statement run after 5 sec

console.log("its take so much time")