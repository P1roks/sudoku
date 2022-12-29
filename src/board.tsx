import React, { useEffect } from "react";
import { useState } from "react";
import { Cell, invis } from "./cell";
import "./board.css"
import { useRef } from "react";
import {randomizeSudoku} from "./randomizer"
import JSConfetti from "js-confetti";

export function Board(){
    const formRef = useRef<HTMLFormElement>(null);
    const submitRef = useRef<HTMLButtonElement>(null);
    const resultRef = useRef<HTMLDivElement>(null);

    function check(event: React.FormEvent){
    	if(!submitRef.current || !resultRef.current || !formRef.current) return;
        event.preventDefault();
        const formInputs = [...formRef.current.elements].filter((elem: any) => !elem.disabled && elem.type === "number"); //TODO do not use any anywhere
        submitRef.current.disabled = true;

        let correct = 0;
        formInputs.forEach((inp: any) => {
            if(inp.valueAsNumber === invis.get(inp.id)){
		 inp.className = "right" //user guessed correclty
		 ++correct;
	    }
            else {
                inp.className = "wrong" //user guessed incorrectly
                inp.valueAsNumber = invis.get(inp.id)
            }
        })
        if (correct === invis.size){
            new JSConfetti().addConfetti(); //only displayed if solved 100% correctly
	    resultRef.current.innerHTML = `<p>Brawo! udało ci się całkowicie poprawnie rozwiązać sudoku! <a href="./">Wygeneruj następne</a></p>`;
        }
	else{resultRef.current.innerHTML = `Uzyskałeś ${correct}/${invis.size} punktów! <br /> Stanowi to ${(correct / invis.size * 100).toFixed(1)}%`;}
    }
    function clear(event: React.FormEvent){
    	if(!submitRef.current || !resultRef.current || !formRef.current) return;
        event.preventDefault();
        const formInputs = [...formRef.current.elements].filter((elem: any) => !elem.disabled && elem.type === "number") //get all inputted numbers
        submitRef.current.disabled = false; //enable submit button
    	formInputs.forEach((inp: any) => {inp.valueAsNumber = NaN; inp.className = "";}) //reset all inputs
	resultRef.current.innerHTML = ``;
    }
    let [tiles,setTiles] = useState<number[][]>([[]])
    useEffect(() => {
            setTiles(randomizeSudoku() || [[]])
    },[])
    

    //since 0 % 3 = 0 , we need to offset that
    let temp = -3;
    let cells = tiles.map((tile,no) => {
    temp += (no) % 3 === 0 ? 3 : 0; 
    return (
    <Cell key = {no}  y = {temp} tiles = {tile} rStart = {no % 3 * 3} toDissapear={7}/>)})

    return (
        <form ref={formRef} onSubmit={check} onReset={clear} id="sudoku">
                <div id="board">
                    {cells}
                </div>
	    	<div id="result" ref={resultRef} />
                <div id="check">
                    <button ref={submitRef} type="submit">Sprawdź</button>
                    <button type="reset">Reset</button>
                </div>
        </form>
    )
}