import React from "react";
import { useState } from "react";
import { Cell } from "./cell";
import "./board.css"

export function Board(){
    let [tiles,getTiles] = useState(
        [[3,1,6,5,2,9,4,8,7],
        [5,7,8,1,3,4,6,2,9],
        [4,9,2,7,6,8,5,3,1],
        [2,6,3,9,7,4,8,5,1],
        [4,1,5,8,6,3,7,9,2],
        [9,8,7,1,2,5,6,4,3],
        [1,3,8,6,9,2,7,4,5],
        [9,4,7,3,5,1,2,8,6],
        [2,5,6,8,7,4,3,1,9]])

    let cells = tiles.map((tile,no) => <Cell key = {no} no = {no} tiles = {tile} />)

    return (
        <div id="sudoku">
            <div id="board">
                {cells}
            </div>
            <div id="check">
                <button>Sprawdź</button>
                <button>Reset</button>
            </div>
        </div>
    )
}