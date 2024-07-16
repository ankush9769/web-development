// API = application programing interface
//in fetch api fetch() methods is used for fetch the resource(data) 
// syntax 
//let promise=fetch(url,[options])


const URL = "https://cat-fact.herokuapp.com/facts"
let promise = fetch(URL)
console.log(promise);



let getfact = async () =>{
    console.log("fetching data....");
    let response = await fetch(URL);
    console.log(response);  // this response's data is in JSON format
    let data = await response.json();   //json() is use to get the actual data of api's response
    console.log(data) 
    let imgfact = document.querySelector(".imginfo");
    imgfact.innerText=data[0].text
}
//getfact();


let btn = document.querySelector("#btn")
btn.addEventListener("click",getfact)

// there are different type of data format
/* 1) AJAX is asyncornous JS and XML
   2) JSON is javascript object natation
*/




