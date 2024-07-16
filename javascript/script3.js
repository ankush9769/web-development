// DOM manipulation

//1).tagname
const tag1 = document.getElementById("headings");
console.log(tag1.tagName);                  //.tagname will return the name of the tag

//2).innertext = it retuns the text content of the tags and also its children and also we can change the text of tag
let divtag = document.querySelector("div");
console.log(divtag);
console.log(divtag.innerText);
//change the text of heading tag
let headng = document.querySelector("h2");
console.log(headng.innerText="bhaji");

//3).innerHTML = it return the text context of the tags with tags and also we can add the hmtl tags
console.log(divtag.innerHTML);
//add the new div in this div tag
//console.log(divtag.innerHTML="<div>this is new div tag which is created by .innerHTML</div>");

//4).textcontext = it is use to read the content of the tags and also you can change the textcontext of tag
console.log(divtag.textContent);
//set the text
//console.log(divtag.textContent="i have change the content of the <div> tag")

