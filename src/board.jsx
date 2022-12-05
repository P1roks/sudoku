import React from "react";
import { useState } from "react";
import { Cell } from "./cell";
import "./board.css"

export function Board(){
    let [tiles,getTiles] = useState(
        [[1,2,3,4,5,6,7,8,9],
        [1,2,3,4,5,6,7,8,9],
        [1,2,3,4,5,6,7,8,9],
        [1,2,3,4,5,6,7,8,9],
        [1,2,3,4,5,6,7,8,9],
        [1,2,3,4,5,6,7,8,9],
        [1,2,3,4,5,6,7,8,9],
        [1,2,3,4,5,6,7,8,9],
        [1,2,3,4,5,6,7,8,9]])

    let cells = tiles.map((tile,no) => <Cell key = {no} no = {no} tiles = {tile} />)

    return (
        <div id="board">
            {cells}
        </div>
    )
}