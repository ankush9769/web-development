let userscore = 0;
let compscore = 0;

let choices = document.querySelector(".choice");
let para = document.querySelector("#mess");
let parauserscore = document.querySelector("#user-score");
let paracompscore = document.querySelector("#comp-score");


let computerchoice = () =>{
    let option = ["rock","paper","scissor"];
    let index = Math.floor(Math.random() * 3)
    let finalopt = option[index]
}

let playgame = () =>{
    //user choice
    console.log("user choice is",ids);
    //computer choice
    computerchoice();
    console.log("computer choice is",finalopt);
    if(finalopt === ids)
    {
        console.log("drow");
        para.innerText("game was drow ! play again");
    }
    else if((finalopt==="rock")&&(ids==="paper"))
    {
        console.log("you won");
        para.innerText("you won");
        para.style.backgroundcolor = "green";
        userscore++;
        parauserscore.innerText = userscore;
    }
    else if((finalopt==="scissor")&&(ids==="paper"))
    {
        console.log("you lose");
        para.innerText("you lose");
        para.style.backgroundcolor = "red";
        compscore++;
        paracompscore.innerText = compscore;
    }
    else if((finalopt==="paper")&&(ids==="rock"))
    {
        console.log("you lose");
        para.innerText("you lose");
        para.style.backgroundcolor = "red";
        compscore++;
        paracompscore.innerText = compscore;
    }
    else if((finalopt==="scissor")&&(ids==="rock"))
    {
        console.log("you won");
        para.innerText("you won");
        para.style.backgroundcolor = "green";
        userscore++;
        parauserscore.innerText = userscore;
    }
    else if((finalopt==="rock")&&(ids==="scissor"))
    {
        console.log("you won");
        para.innerText("you won");
        para.style.backgroundcolor = "green";
        userscore++;
        parauserscore.innerText = userscore;
    }
    else if((finalopt==="paper")&&(ids==="scissor"))
    {
        console.log("you lose");
        para.innerText("you lose");
        para.style.backgroundcolor = "red";
        compscore++;
        paracompscore.innerText = compscore;
    }
    else{
        console.log("invalid choice");
    }

}

choices.forEach((element) => {
    console.log(element);
    element.addEventListener("click" , () =>{
        let ids = document.getAttribute("id");
        playgame(); 
    });
});