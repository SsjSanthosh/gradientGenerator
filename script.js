let input1      = document.getElementById("color1");
let input2      = document.getElementById("color2");
let h3          = document.querySelector("h3");
let dirButton   = document.querySelector("#direction");
let angleButton = document.querySelector("#angle");
let choose      = document.querySelector(".choose");
let dirDone     = document.querySelector("#directionButton");
let angDone     = document.querySelector("#angleButton");
let directionSelect   = document.querySelector("#directionSelect");
let angleDiv    = document.querySelector(".angleDiv");
let dirDiv      = document.querySelector(".directionDiv");





const changeColor= (e,dir="",angle="")=> {
    let gradient = "";
    if (dir=="" && angle==""){
        
        gradient=`linear-gradient(to right, ${input1.value}, ${input2.value} )`;
    }
    else if(angle==""){
        gradient=`linear-gradient(to ${dir}, ${input1.value}, ${input2.value} )`;
        
    }
    else{
        gradient=`linear-gradient(${angle}deg, ${input1.value}, ${input2.value} )`;
        
    }
    document.body.style.background=gradient;
    h3.textContent = document.body.style.background + ";"
}

const toggleHide = (e)=>{
    
    if(e.target.id==="direction" || e.target.id==="directionButton"){
        document.querySelector(".directionDiv").classList.toggle("hide");
    }
    else{
        document.querySelector(".angleDiv").classList.toggle("hide");
    }
    choose.classList.toggle("hide");
}

const colorHelper= (e)=>{
    if(e.target.id == "angleButton"){
        changeColor(e,dir="",document.querySelector("#angleInput").value);
    }
    else{
        let direction = directionSelect.options[directionSelect.selectedIndex].value;
        changeColor(e,direction,angle="");
       }
    toggleHide(e);
};

const loadEvents = ()=>{
    dirDone.addEventListener("click",colorHelper);
    angDone.addEventListener("click",colorHelper);
    dirButton.addEventListener("click",toggleHide);
    angleButton.addEventListener("click",toggleHide);
    input1.addEventListener("input",changeColor);
    input2.addEventListener("input",changeColor);
}

loadEvents();
