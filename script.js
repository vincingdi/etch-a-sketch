// variable put html div container in variable using his div
const container = document.querySelector("#container");

// container.style.display = "flex";
// 16 X 16 grid


// How to make a every 16th div on separate line.

// append too container 16 div but make them as a grid with css by making container display:flex 

const div = document.createElement("div");
div.style.backgroundColor = "grey";


for (let i=0; i<16; i++) {
   container.appendChild(div);
}


