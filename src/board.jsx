import React, { useEffect } from "react";
import { useState } from "react";
import { Cell, invis } from "./cell";
import "./board.css"
import { genCell } from "./utils";
import { useRef } from "react";

export function Board(){
    const formRef = useRef();
    function check(event){
        let checked = new Map();
        event.preventDefault();
        const formInputs = [...formRef.current.elements].filter(elem => !elem.disabled && elem.type === "number")
        formInputs.forEach(inp => {
            if(inp.valueAsNumber === invis.get(inp.id)) inp.className = "right"
            else inp.className = "wrong"
        })
    }
    function clear(event){
        event.preventDefault();
        const formInputs = [...formRef.current.elements].filter(elem => !elem.disabled && elem.type === "number")
        formInputs.forEach(inp => inp.valueAsNumber = NaN)
    }
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
    <Cell key = {no}  y = {temp} tiles = {tile} rStart = {no % 3 * 3} />)})

    useEffect(() => {
//        console.log(invis)
    },[])

    return (
        <form ref={formRef} onSubmit={check} onReset={clear} id="sudoku">
                <div id="board">
                    {cells}
                </div>
                <div id="check">
                    <button type="submit">Sprawdź</button>
                    <button type="reset">Reset</button>
                </div>
        </form>
    )
}