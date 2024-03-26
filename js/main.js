let currentPlayer = 'X';
let cells = document.querySelectorAll('.cell');
let board = [
	['none','none','none'],
	['none','none','none'],
	['none','none','none'],
];

let resetGame = function(){
	currentPlayer = 'X';
    cells.forEach(cell => cell.innerText = '');

	board = [
		['none','none','none'],
		['none','none','none'],
		['none','none','none'],
	];
}

let moveTo = function(yPos, xPos, obj){
	if(board[yPos][xPos] !== 'none'){
		alert(`Invalid!`);
		return;
	}
	if(hasWinner()){
		alert(`Alread has a winner!`);
		return;
	}

	board[yPos][xPos] = currentPlayer;
	obj.innerText = currentPlayer;
	
	debugGame();
	if(hasWinner()){
		alert(`Player ${currentPlayer} wins!`);
	}else if(isDraw()){
		alert(`This is draw!`);
	}else{
		currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
	}
}

let hasWinner = function(){
	let winningCombos = [
		// Horizontal
		['0,0','0,1','0,2'], 
		['1,0','1,1','1,2'],
		['2,0','2,1','2,2'],

		// vertical
		['0,0','1,0','2,0'],
		['0,1','1,1','2,1'],
		['0,2','1,2','2,2'],

		// diagonal
		['0,0','1,1','2,2'],
		['0,2','1,1','2,0'],
	];
	for(let i = 0; i < winningCombos.length; i ++){
		let pos0 = winningCombos[i][0].split(",");
		let pos1 = winningCombos[i][1].split(",");
		let pos2 = winningCombos[i][2].split(",");

		if(board[pos0[0]][pos0[1]] === currentPlayer &&
			board[pos1[0]][pos1[1]] === currentPlayer &&
			board[pos2[0]][pos2[1]] === currentPlayer){
			
			return true;
		}
	}

	return false;
	
}

let isDraw = function(){
	let count = 0;
	for (let y = 0; y < 3; y++) {
		for (let x = 0; x < 3; x++) {
			if(board[y][x] !== 'none'){
				count ++;
			}
		}
    }

	return count === 9;
}

let debugGame = function(){
	let strDebugg = "";
	for (let y = 0; y < 3; y++) {
		strDebugg += "["+board[y][0]+"]["+board[y][1]+"]["+board[y][2]+"]\n";
    }

	console.log(strDebugg);
}
