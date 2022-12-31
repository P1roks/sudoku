import React, { useEffect } from "react";
import { useState } from "react";
import { Row, invis } from "./row";
import "./board.css"
import { useRef } from "react";
import {randomizeSudoku} from "./randomizer"
import JSConfetti from "js-confetti";
import {Timer} from "./timer";

export function Board(props: {toDissapear: number}){
    let [tiles,setTiles] = useState<number[][]>([[]])

    const formRef = useRef<HTMLFormElement>(null);
    const submitRef = useRef<HTMLButtonElement>(null);
    const resultRef = useRef<HTMLDivElement>(null);
    const timeRef = useRef<Timer>(null);

    function check(event: React.FormEvent){
    	if(!submitRef.current || !resultRef.current || !formRef.current || !timeRef.current) return;
        timeRef.current.stopTimer()
        event.preventDefault();
        const formInputs = [...formRef.current.elements].filter(elem => elem instanceof HTMLInputElement && !elem.disabled && elem.type === "number") as HTMLInputElement[]
        submitRef.current.disabled = true;
        let correct: number = 0;
        formInputs.forEach(inp => {
            if(inp.valueAsNumber === invis.get(inp.id)){
		 inp.className = "right" //user guessed correclty
		 ++correct;
	    }
            else {
                inp.className = "wrong" //user guessed incorrectly
                inp.valueAsNumber = invis.get(inp.id) //show the real number that should go in its place
            }
        })
        if (correct === invis.size){
            new JSConfetti().addConfetti({confettiNumber:1000}/* {confettiNumber: 243,emojis:["1","2","3","4","5","6","7","8","9"]} */); //only displayed if solved 100% correctly
	    resultRef.current.innerHTML = `<p>Brawo! udało ci się całkowicie poprawnie rozwiązać sudoku! <a href="./">Wygeneruj następne</a></p>`;
        }
	else{resultRef.current.innerHTML = `Uzyskałeś ${correct}/${invis.size} punktów! <br /> Stanowi to ${(correct / invis.size * 100).toFixed(1)}%`;}
    }

    function clear(event: React.FormEvent){
    	if(!submitRef.current || !resultRef.current || !formRef.current || !timeRef.current) return;
	timeRef.current.resetTimer();
        event.preventDefault();
        const formInputs = [...formRef.current.elements].filter(elem => elem instanceof HTMLInputElement && !elem.disabled && elem.type === "number") as HTMLInputElement[] //get all inputted numbers
        submitRef.current.disabled = false; //enable submit button
    	formInputs.forEach(inp => {inp.valueAsNumber = NaN; inp.className = "";}) //reset all inputs
	resultRef.current.innerHTML = ``;
    }

    useEffect(() => {
            setTiles(randomizeSudoku() || [[]])
    },[])
    

    let cells = tiles.map((tile,no) => {
    return <Row key={no}  y={no} tiles={tile} toDissapear={props.toDissapear}/>;})

    return (
    <div id="main">
    	<Timer ref={timeRef} />
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
    </div>
    )
}
