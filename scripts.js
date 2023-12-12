function populateBoard(size){

let board = document.querySelector('.board');
board.style.gridTemplateColumns = `repeat(${size},1fr)`;
board.style.gridTemplateRows = `repeat(${size},1fr)`;
   

    for(i=0;i<256;i++){
        
        let square = document.createElement('div');
        square.style.backgroundColor = 'gray'
        board.appendChild(square);

    }
}

populateBoard(16)
        


  

        