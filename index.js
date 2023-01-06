var header = document.getElementById("name");
function changeColor(event){
    if (event.target.style.color === "crimson"){
        event.target.style.color = "green";
        event.target.style.fontSize = "80px";
    } else {
        event.target.style.color = "crimson";
        event.target.style.fontSize = "65px";
    }
}
header.addEventListener("click", changeColor);
