//                                          Events
// the changes in the state of an object(button,p,div,etc...,) is known as an event
//Events are fired to notify code of "interesting changes" that may affect the code execution
/*
    #) mouse events(click,double click,etc..,)
    #) keyboard events(keypress,keyup,keydown)
    #) form event(submit,etc...,)
    #) print event & many more
*/

// there are three ways to handle the event
// 1) inline
// 2) javascript
// 3) event listeners



//we can perform the the event in the html code but it is not good practice
// so we use the node.event=()=>{
//      handle event                 }
let btn = document.querySelector("button");
btn.onclick=()=>{
    console.log("the button is clicke");
}
//event also having object
btn.onclick=(e)=>{
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX,e.clientY);

}

//event listeners
// syntax
/*
   node.addEventListener(event,callback)
*/


//Q) create a button by which we can switch from dark to light or light to dark

let mode = document.querySelector(".mode");
let modes = "light";  

mode.addEventListener("click", () => {
    if(modes === "light")
    {
        modes = "dark";
        document.querySelector("body").style.backgroundColor="black";
    }
    else
    {
        modes = "light";
        document.querySelector("body").style.backgroundColor="white";
    }
    console.log(modes);
});


