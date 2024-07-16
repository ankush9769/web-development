console.log("hello wellcome to js");//this is used for printing the anythings
console.log("ankush pal");

age=13;  //variable declaration
console.log(age);


var name="ankush";   //it is globle variable it can access the from anywere
let name1="ankush";   //it is block variable ,that means you can access only in it own function 
const pi=3.14;       //it is also block constant and its value can't be change once initilize

const amazon={
    produnctname3:"ball pen",
    offer:"80%",
    mrp:100
}
console.log(amazon.produnctname3);
console.log(amazon.offer);
console.log(amazon.mrp);

   

/*document.getElementById("demo").innerHTML="ankush pal";
function myfunction()
{
    document.getElementById("demo2").innerHTML="this is another way to print the text";
}
 */    


//operator
let num1 = 86;
let num2 = 20;
let sum = num1 + num2;
console.log(num1+"+"+num2+"="+sum);

// && logical and
// || logical or
// !  logical not
// === to check the value of the both variable is = or not

//conditional statement 
let color;
let mode = "dark";
if(mode === "dark")
{
    color = "darkmode";
    console.log(color);
}
else if(mode === "normal")
{
    color = "normalmode";
    console.log(color);
}
else
{
    color = "lightmode";
    console.log(color);
}



//switch case
let bool = 1;
switch(bool){
    case 1:
        console.log("this is true");
        break;
    case 2:
        console.log("this is false");
        break;
    default:
        console.log("invalid input");          
}


//Q take the input from the user and check wether the given number is multiple of 5 or not
/*let num3;
num3 = prompt("enter the number");
if(num3 % 5 === 0)
{
    console.log("yes it is multiple of 5");
}    
else
{
    console.log("no it is not multiple of 5");
}
*/    



//loop
//for loop
for(let i = 1;i<=5;i++)
{
    console.log("thakur college")
}

//print the sum of 1 to 10
for(i=1;i<=10;i++){
    let sum = 0;
    sum += sum + i;
}
console.log("sum="+sum)

//while loop
let j = 1;
while(j<=4){
    console.log("hello ankush");
    j++;
}

//do while
let k = 1;
do{
    console.log("hello");
    k++;
}while(k<=3);

//for-of loop = it is use for iterate the string or array
//and alos find the length of the string
let str = "rishabh";
let len = 0;
for(let i of str){
    console.log("i=",i);
    ++len;
}
console.log("lenght of string=",len);


//for-in loop = it is use for iterate the object
let student = {                                  // student is object
    naam : "rishabh",
    roll : 123,
    cource : "BCA"
}



for(let key in student){
    console.log("key=",key,"| value=",student[key]);
}

//Q) print all the even no. from 1 to 10
for(i=1;i<=10;i++){
    if(i % 2 === 0){
        console.log(i);
    }
}
//Q) create a game where user keep guessing the number until he or she guess the currect no
/*let gamenum = 30;
console.log("guess the number between 1 to 100");
let usernum = prompt("guess the number between 1 to 100");

while(usernum != gamenum  ){
    usernum = prompt("oops wrong,,guess the number between 1 to 100");
    if(usernum == gamenum){
        console.log("yes you guessed the currect number");
    }
}
    */





//string   =   it is sequence of the character

let str1 = "   ankush   ";
console.log("length of the string = ",str1.length);   // .length is used for know the lenght of string
console.log("third letter of the string=",str1[2]);
console.log("uppercase=",str1.toUpperCase());
console.log("lowercase=",str1.toLowerCase());
console.log("trim=",str1.trim());
console.log("index of a=",str1.indexOf('a'));
console.log("slice=",str1.slice(5,9));
console.log("charAt 4 =",str1.charAt(5));
console.log("replace=",str1.replace('a','f'));


//template leterals
let employee = {
    id : 123,
    salary : 10000,
    sector : "cs",
};
let output = `the salary ot the employee whos id is ${employee.id} is ${employee.salary} and the he works in ${employee.sector}`;
console.log(output);



//array         arrays are mutable where as strings are immutable

let marks = [128,765,987,475,716];
console.log(marks);
console.log(marks.length);
//for acces the element of the array
console.log(marks[2]);

//array method
let food = ["apple","banana","litchi","chhole"];
//push = it is used for add a new element at the end of the array
food.push("bhature");    //we can also add multiple item by , sepatated
console.log(food);
//unshift = it add the element at the starting of the array
food.unshift("dal");
console.log(food);
//pop = it is use for delete the element from the end of the array and return the deleted element
let deletedfood = food.pop();
console.log(deletedfood);
console.log(food);
//shift = it delete the element at the starting of the array
food.shift();
console.log(food);
console.log(food.toString());     // .tostring() is use for convert the array into strings

//concate()
console.log(food.concat(marks));







