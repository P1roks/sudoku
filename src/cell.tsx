import React from "react"
import "./cells.css"

interface CellProps {
	y: number;
	rStart: number;
	toDissapear: number;
	tiles: Array<Number>;
}

export let invis = new Map();
export const Cell = (props: CellProps) => {
    let y = props.y - 1;

    let toDissapear = props.toDissapear;
    let tiles = props.tiles.map((tileNo,x) => {
        y += x % 3 == 0 ? 1 : 0;
        x = x % 3 + props.rStart;
        let visible = true;
        let coords = `${y}${x}`
        if(toDissapear > 0 && Math.random() > .5){
            --toDissapear;
            visible = false;
            invis.set(coords,tileNo)
        }
        return (
            visible ?
            <input type="number" name={coords} id={coords} value={tileNo.toString()} disabled key={coords} /> :
            <input type="number" name={coords} id={coords} key={coords}/> 
        )
    })

    return (
        <div className="cell">
            {tiles}
        </div>
    )
}