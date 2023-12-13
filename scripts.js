
const sizeInput = document.querySelector('#size');
const clearButton = document.querySelector('#clear');
const gridButton = document.querySelector('#grid');
const eraserButton = document.querySelector('#eraser');
const penButton = document.querySelector('#pen');
let color  = 'black'
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

    eraserButton.addEventListener('click',()=>{
        color = 'white'
    })
    penButton.addEventListener('click',()=>{
        color = 'black'
    })
}

gridButton.addEventListener('click',()=>{
    board.classList.toggle('gap');
})

populateBoard(16)


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

function Eraser(){
        color = 'white'
}
  
function clear(){

}
        