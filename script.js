let input1      = document.getElementById("color1");
let input2      = document.getElementById("color2");
let h3          = document.querySelector("h3");
let dirButton   = document.querySelector("#direction");
let angleButton = document.querySelector("#angle");
let choose      = document.querySelector(".choose");
let dirDone     = document.querySelector("#directionButton");
let angDone     = document.querySelector("#angleButton");
let directionSelect   = document.querySelector("#directionSelect");
let angleDiv    = document.querySelector(".angleDiv")
let dirDiv      = document.querySelector(".directionDiv")

dirDone.addEventListener("click",colorHelper);
angDone.addEventListener("click",colorHelper);
dirButton.addEventListener("click",toggleHide);
angleButton.addEventListener("click",toggleHide);
input1.addEventListener("input",changeColor);
input2.addEventListener("input",changeColor);

function changeColor(){
    if (true){
        document.body.style.background="linear-gradient(to right, " 
        + input1.value + ", "
        + input2.value + ")";
        h3.textContent = document.body.style.background + ";"
    }
}

function toggleHide(e){
    
    if(e.target.id==="direction" || e.target.id==="directionButton"){
        document.querySelector(".directionDiv").classList.toggle("hide");
    }
    else{
        document.querySelector(".angleDiv").classList.toggle("hide");
    }
    choose.classList.toggle("hide")
}

function colorHelper(e){
    if(e.target.id == "angleButton"){
        console.log(document.querySelector("#angleInput").value)
        let angle = document.querySelector("#angleInput").value;
        changeColor2(dir="",angle);
    }
    else{
        let direction = directionSelect.options[directionSelect.selectedIndex].value;
        
        changeColor2(direction,angle="");
    }

}

function changeColor2(dir="",angle=""){
    let bg = document.body.style.background;
    angle = Number(angle)
    if(dir==""){
        console.log("here")
        document.body.style.background = "linear-gradient(" + angle + "deg ,"
        + input1.value + ", " + input2.value + ")";
        h3.textContent = document.body.style.background + ";"
        angleDiv.classList.toggle("hide");
        

    }
    else{
        let direction = ""
        if(dir.includes("-")){
            let temp = dir.split("-")
            direction=temp[0]+ " " + temp[1];
        }
        else{
            direction=dir;
        }
        console.log(direction)
        document.body.style.background = "linear-gradient(to " + direction  + ","
        + input1.value + ", " + input2.value + ")";
        h3.textContent = document.body.style.background + ";"
        dirDiv.classList.toggle("hide");
       
    }
    choose.classList.toggle("hide")
}