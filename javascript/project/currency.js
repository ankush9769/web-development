let base_url="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies"

let dropdowns = document.querySelectorAll(".select-container1");
const btn = document.querySelector("button");
const fromcurr = document.querySelector(".from select");
const tocurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

for(let selects of dropdowns)
{
    for(Currcode in countryList){
        let newoption = document.createElement("option");
        newoption.innerText=Currcode;
        newoption.value=Currcode;
        if(selects.name === "from" &&  Currcode === "USD")
        {
            newoption.selected= "selected";
        }
        else if(selects.name === "to" &&  Currcode === "INR")
        {
            newoption.selected= "selected"
        }
        selects.append(newoption);
    }
    selects.addEventListener("change",(evt)=>{
        updateflag(evt.target);
    });
}

const updateflag=(element)=>{
    let Currcodes = element.value;
    let countrycodes = countryList[Currcodes];
    let newSrc = `https://flagsapi.com/${countrycodes}/flat/64.png`;
    let imgs = element.parentElement.querySelector("img");
    imgs.src=newSrc;
};

btn.addEventListener("click",async(evt)=>{
    evt.preventDefault();
    let amount = document.querySelector("input");
    let amtval = amount.value;
    if(amtval === "" || amtval < 0)
    {
        amtval = 1;
        amount.value = "1";
    }
    //console.log(fromcurr.value, tocurr.value);
    const url = `${base_url}/${fromcurr.value.toLowerCase()}/${tocurr.value.toLowerCase()}.json`;
    let response = await fetch(url);
    let data = await response.json();
    let rate = data[tocurr.value.toLowerCase()];
    console.log(rate);

    let finalamount = amtval * rate;
    msg.innerText=`${amtval} ${fromcurr.value} = ${finalamount} ${tocurr.value} `;

})
