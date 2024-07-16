//                                         DOM
//                   DOM is used to make changes dynamically in the runtime 


//alert("warnning");
console.log("hello")

console.dir(window.document.body);  // it is use for the accessing the document object that contains all html element
console.log(document.body); //it access the html body tag content by javascript

// we can also access the childnode of the any tag loke
console.log(document.body.childNodes[5]);
console.log(document.body.childNodes[9]);

//we can also make changes dynamically in the any tags for eg.., hare button text change to dont click me
document.body.childNodes[11].innerText= "dont click me";




// how to access the html tag or elements in the javascript basically we have 3 ways
//1)getElementByID("id")
let heading = document.getElementById("heading1");
console.log(heading);//it will display the <h1> heading tag
console.dir(heading);//it will display all the object corussponding to the <h1> heading tag

//2)getElementsByClass("class")
let headings = document.getElementsByClassName("headings")
console.log(headings);
console.dir(headings);  

//3)getElementByTagname("name")
let para = document.getElementsByTagName("p");
console.dir(para);
console.log(para);


//query selector is a advanced version of of the to get the access of html element
//1).queryselector("id"/"class"/"name")               it can take id / class / name
console.log("query selector");                        //for first element
let firstelemnt = document.querySelector(".headings");
console.log(firstelemnt);
console.dir(firstelemnt);

let allelemnt = document.querySelectorAll(".headings");       //for all element
console.log(allelemnt);
console.dir(allelemnt);



/* some imp concept in DOM
   so in html structur there are three most imp term 
   1)parent
   2)children
   3)sibling

   in our case
   1)parent tag = <body>
   2)children tag of body tag = div,h1,h4,button,p
   3)sibling in the body tag = div,h1,h4,button,p   these tags are sibling of each other
*/

//childnode  = it contains text , comment and element
//firstchild = it will return the first child of given tag or the first child of tree
let fchild = document.getElementsByTagName("div");
console.log(fchild.firstchild);
console.log(fchild.isConnected);
//lastchild = it will return the last child of given tag or the last child of tree
console.log(fchild.lastchild);













