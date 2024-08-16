let color = "black";
document.addEventListener('DOMContentLoaded',function(){
    createBoard(16);

    let btn = document.querySelector("#popup")
btn.addEventListener("click",function (){
    let size = getSize();
    createBoard(size);
})
})

function createBoard(size){
    let board = document.querySelector(".board");
board.style.gridTemplateColumns = `repeat(${size},1fr)` ;
board.style.gridTemplateRows = `repeat(${size},1fr)`;
let numDivs = size * size;
for(let i=0;i<numDivs;i++){
    let div = document.createElement("div")
    div.addEventListener("mouseover",colorDiv)
    let reset = document.querySelector(".reset");
    reset.addEventListener("click",function (){
        div.style.backgroundColor = "white";
    })
    

    board.insertAdjacentElement("beforeend",div);
}
}

function getSize(){
    let input = prompt("Give size of the sketch-board?");
    let message = document.querySelector("#message");
    if(input == ""){
        message.innerText = "size haal vai";
       }
       else if(input<0||input>100){
        message.innerText = "invalid size";
       }
     
       else{
        message.innerText="play!";
        return input
       }
}

function colorDiv(){
    if(color == "random"){
        this.style.backgroundColor = `hsl(${Math.random()*360},100%,50%)`;
    }
    else{
        this.style.backgroundColor = "black";
    }
}

function setColor(colorChoice){
      color = colorChoice;
}

