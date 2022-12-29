import { getRandomInt, shuffle } from "./utils";

let sudokus = [
    [[3,1,6,5,2,9,4,8,7],
    [5,7,8,1,3,4,6,2,9],
    [4,9,2,7,6,8,5,3,1],
    [2,6,3,9,7,4,8,5,1],
    [4,1,5,8,6,3,7,9,2],
    [9,8,7,1,2,5,6,4,3],
    [1,3,8,6,9,2,7,4,5],
    [9,4,7,3,5,1,2,8,6],
    [2,5,6,8,7,4,3,1,9]],
    [[5,3,4,6,7,2,1,9,8],
    [6,7,8,1,9,5,3,4,2],
    [9,1,2,3,4,8,5,6,7],
    [8,5,9,4,2,6,7,1,3],
    [7,6,1,8,5,3,9,2,4],
    [4,2,3,7,9,1,8,5,6],
    [9,6,1,2,8,7,3,4,5],
    [5,3,7,4,1,9,2,8,6],
    [2,8,4,6,3,5,1,7,9]]
    ]

export const randomizeSudoku = () => {
    let rand = getRandomInt(sudokus.length);
    console.log(rand)
    let board = sudokus.at(rand);
    let mappings = shuffle([1,2,3,4,5,6,7,8,9]);

    for(let y = 0; y < board.length; y++){
        for(let x = 0; x < board[y].length; x++){
            //Map every number to another number (for example every 4 turns into 5)
            board[y][x] = mappings[board[y][x] - 1]
        }
    }
    //shuffle rows
    // return [
    //     shuffle(board.slice(0,3)),
    //     shuffle(board.slice(3,6)),
    //     shuffle(board.slice(6)),
    // ].flat()
    return board;
}