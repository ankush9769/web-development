//                                  DOM part2

//  Attribute
//1)  getAttribute(attr)   = it is basically used for getting the value of the attribute of any tag
//2)  setAttribute(attr,value)  = it is use for set the value of the attribute


//getAttribute(attr)
let div = document.querySelector("div");
console.log(div.getAttribute("id"));
console.log(div.getAttribute("name"));

let para = document.querySelector("p");
console.log(para.getAttribute("class"));

//setAttribut(attr,value)
console.log(para.setAttribute("class","newparagraf"));
console.log(para.getAttribute("class"));



//style
// node.style     =  it basically provide the entire styling of the any tag and we can alos change the style
let styling = document.querySelector("div");
console.log(styling.style);

styling.style.backgroundColor="red"; //here we change the color from blue to red
styling.style.fontSize="20px";




//till here we study the about how to access the element and make the changes in the element
//lets study the how to add the new element 
/* for adding the any new element there are two stape
   1) create the new element
   2) then add the newly created element
*/
let newbtn = document.createElement("button");  //created the new element
console.log(newbtn);
console.log(newbtn.innerText="newbutton");      //gave the some text to element

let divtag = document.querySelector("div")
divtag.append(newbtn);  //it used for appending the element at the end of the main element(inside)
divtag.prepend(newbtn); //it used for prepending the element at the starting of the main element(inside)
divtag.before(newbtn);  //it used for add the element before the main element(outside)
divtag.after(newbtn); //it used for add the element afer the main element(outside)
divtag.appendChild()


//we can also delete the element  by using node.remove()
newbtn.remove();

   


