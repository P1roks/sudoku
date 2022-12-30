import {KeyboardEvent} from "react";
import "./cells.css"

interface CellProps {
	y: number;
	rStart: number;
	toDissapear: number;
	tiles: Array<Number>;
}

export let invis = new Map();
export const Cell = (props: CellProps) => {
    const handleInput = (event: KeyboardEvent<HTMLInputElement>) => {
    	if(event.key === "Backspace") return;
	event.preventDefault()
    	if(!/[1-9]/.test(event.key)) return;
	let input = event.target as HTMLInputElement;
	input.valueAsNumber = Number(event.key)
    }

    let toDissapear = props.toDissapear;
    let row = props.tiles.map((tileNo,x) => {
        // y += x % 3 == 0 ? 1 : 0;
        // x = x % 3 + props.rStart;
        let visible = true;
        let coords = `${props.y}${x}`
        if(toDissapear > 0 && Math.random() > .5){
            --toDissapear;
            visible = false;
            invis.set(coords,tileNo)
        }
        return (
            visible ?
            <input type="number" name={coords} id={coords} value={tileNo.toString()} key={coords} disabled/> :
            <input type="number" name={coords} id={coords} key={coords} onKeyDown={(e) => handleInput(e)}/> 
        )
    })

    return (
        <div className="row">
            {row}
        </div>
    )
}
