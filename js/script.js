let hourtxt = document.querySelector(".hourtxt h1");
let minutetxt = document.querySelector(".minutetxt h1");
let secondtxt = document.querySelector(".secondtxt h1");

function SetTime(){
    let date = new Date();
    let Hour = date.getHours();
    let Minute = date.getMinutes();
    let Second = date.getSeconds();

    hourtxt.textContent = Hour;
    secondtxt.textContent = Second;
    minutetxt.textContent = Minute;

    // check if the varibales are less than 10 if they were so add "0" + the variable
    if(Hour < 10){
        hourtxt.textContent = "0" + Hour;
    }
    if(Minute < 10){
        minutetxt.textContent = "0" + Minute;
    }
    if(Second < 10){
        secondtxt.textContent = "0" + Second;
    }


}

setInterval(()=>{
    SetTime();
},1000)