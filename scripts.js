
const sizeInput = document.querySelector('#size');
const clearButton = document.querySelector('#clear');
const gridButton = document.querySelector('#grid');
const eraserButton = document.querySelector('#eraser');
const color  = 'blue'
let board = document.querySelector('.board');

function populateBoard(size){


    let squares = board.querySelectorAll('div');

    squares.forEach((square =>square.remove()));
    board.style.gridTemplateColumns = `repeat(${size},1fr)`;
    board.style.gridTemplateRows = `repeat(${size},1fr)`;


    for(i=0;i<size*size;i++){

        let square = document.createElement('div');
        square.addEventListener("mouseover", colorSquare);
        square.style.backgroundColor = 'white';
        board.appendChild(square);
    }

    clearButton.addEventListener('click', ()=>{
        populateBoard(size);

        })
    gridButton.addEventListener('click',()=>{
        board.classList.toggle('gap');
    })
   
}

gridButton.addEventListener('click',()=>{
    board.classList.toggle('gap');
})

populateBoard(16)
eraserButton.addEventListener('click',()=>{
    color = 'white'
})

sizeInput.addEventListener('change', ()=>{

    const choice = sizeInput.value;

    if(choice=='16'){
        populateBoard(16);
    }
    else if(choice=='32'){
        populateBoard(32);
    }
    else if(choice==='55'){
        populateBoard(55);
    }
    else if(choice==='64'){
        populateBoard(64);
    }

})




function colorSquare(){
    this.style.backgroundColor = color;

    
}

function removeGap(){
    this.style.gap = "none"
}
  
function clear(){

}
        