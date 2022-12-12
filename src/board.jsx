import React, { useEffect } from "react";
import { useState } from "react";
import { Cell, invis } from "./cell";
import "./board.css"
import { genCell } from "./utils";

export function Board(){
    // let [tiles,setTiles] = useState([
    //     genCell(),
    //     genCell(),
    //     genCell(),
    //     genCell(),
    //     genCell(),
    //     genCell(),
    //     genCell(),
    //     genCell(),
    //     genCell(),
    // ])
    // function addToInvis(coord,val){
    //     let temp = new Map(invis)
    //     temp.set(coord,val)
    //     setInvis(temp)
    // }
    // function addMapInvis(newInvis){
    //     setInvis(new Map([...invis,...newInvis]))
    // }
    let [tiles,setTiles] = useState(
        [[3,1,6,5,2,9,4,8,7],
        [5,7,8,1,3,4,6,2,9],
        [4,9,2,7,6,8,5,3,1],
        [2,6,3,9,7,4,8,5,1],
        [4,1,5,8,6,3,7,9,2],
        [9,8,7,1,2,5,6,4,3],
        [1,3,8,6,9,2,7,4,5],
        [9,4,7,3,5,1,2,8,6],
        [2,5,6,8,7,4,3,1,9]])

    //since 0 % 3 = 0 , we need to offset that
    let temp = -3;
    let cells = tiles.map((tile,no) => {
    temp += (no) % 3 === 0 ? 3 : 0; 
    return (
    <Cell key = {no}  y = {temp} tiles = {tile} rStart = {no % 3 * 3} /* setInvis = {invis => addMapInvis(invis)} *//* addCoord = {coord => setCords([...invisibleCoord,coord])} */ />)})

    useEffect(() => {
        console.log(invis)
    },[])

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