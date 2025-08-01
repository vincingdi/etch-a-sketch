function createGrid(squaresPerSide = 16) {


    // variable put html div container in variable using his div
    // const container = document.querySelector("#container");
    var container = document.getElementById("container");
    container.innerHTML = '';
    container.style.display = "flex";
    container.style.flexWrap = "wrap";
    container.style.width = "640px";
    container.style.height = "640px";
    // 16 X 16 grid



    // append too container 16 div but make them as a grid with css by making container display:flex 

    for (let i=0; i<squaresPerSide*squaresPerSide; i++) {

    var div = document.createElement("div");
    div.style.width = 640 / squaresPerSide + "px";
    // console.log(div.style.width);
    div.style.height = 640 / squaresPerSide + "px";
    console.log(div.style.height);
    div.style.backgroundColor  = "gray";
    div.classList.add("grid-block");
    container.appendChild(div);

    }

    gridBlocks = document.querySelectorAll(".grid-block");

    gridBlocks.forEach(block => {
        block.addEventListener("mouseover", () =>{
            block.style.backgroundColor = randomizeColor();
        });

    });
}


function randomizeColor() {
    // randomize r g b values and but them in variables 
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let color = `rgb(${r}, ${g}, ${b})`;
    // return rgb color value 
    return color;

}


function mainLoop() {

    createGrid();
    let squaresPerSide;
    document.getElementById("size-button").onclick = function() {
        while (!(Number(squaresPerSide) > 0 && Number(Number(squaresPerSide) <= 100))) {
            squaresPerSide = prompt("How many squares per side?");
        } 
        createGrid(squaresPerSide);

    }
    
    
}

mainLoop(); 