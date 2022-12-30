import { getRandomInt, shuffle } from "./utils";

const sudokus = [
	[[5,3,4,6,7,8,9,1,2],
	[6,7,2,1,9,5,3,4,8],
	[1,9,8,3,4,2,5,6,7],
	[8,5,9,7,6,1,4,2,3],
	[4,2,6,8,5,3,7,9,1],
	[7,1,3,9,2,4,8,5,6],
	[9,6,1,5,3,7,2,8,4],
	[2,8,7,4,1,9,6,3,5],
	[3,4,5,2,8,6,1,7,9]],
	[[9,6,3,1,7,4,2,5,8],
	[1,7,8,3,2,5,6,4,9],
	[2,5,4,6,8,9,7,3,1],
	[8,2,1,4,3,7,5,9,6],
	[4,9,6,8,5,2,3,1,7],
	[7,3,5,9,6,1,8,2,4],
	[5,8,9,7,1,3,4,6,2],
	[3,1,7,2,4,6,9,8,5],
	[6,4,2,5,9,8,1,7,3]]
]

export const randomizeSudoku = () => {
    let rand = getRandomInt(sudokus.length);
    let board = sudokus.at(rand);
    if(!board) return;
    let mappings = shuffle([1,2,3,4,5,6,7,8,9]) as number[];

    for(let y = 0; y < board.length; y++){
        for(let x = 0; x < board[y].length; x++){
            //Map every number to another number (for example every 4 turns into 5)
            board[y][x] = mappings[board[y][x] - 1]
        }
    }
    //shuffle rows
    return [
        shuffle(board.slice(0,3)),
        shuffle(board.slice(3,6)),
        shuffle(board.slice(6)),
    ].flat() as number[][]
}
