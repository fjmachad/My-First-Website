var header = document.getElementById("name");
//If color is crimson then the header will be in original state
//flip to green and increase the font size
// if its not crimson then it has been clicked and we revert back to its original state
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
