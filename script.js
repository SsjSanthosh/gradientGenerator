let input1 = document.getElementById("color1");
let input2 = document.getElementById("color2");
let h3     = document.querySelector("h3");
input1.addEventListener("input",changeColor);
input2.addEventListener("input",changeColor);

function changeColor(){
    document.body.style.background="linear-gradient(to right, " 
    + input1.value + ", "
    + input2.value + ")";
    h3.textContent = document.body.style.background + ";"
}