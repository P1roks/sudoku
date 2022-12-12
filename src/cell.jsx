import React from "react"
import { useEffect } from "react";
import "./cells.css"

export let invis = new Map();
export const Cell = React.memo(props => {
    let y = props.y - 1;

    let toDissapear = 2;
    let tiles = props.tiles.map((tileNo,x) => {
        y += x % 3 == 0 ? 1 : 0;
        x = x % 3 + props.rStart;
        let visible = true;
        let coords = `${y}${x}`
        if(toDissapear > 0 && Math.random() > .7){
            --toDissapear;
            visible = false;
            invis.set(coords,tileNo)
        }
        return (
            visible ?
            <input type="number" name={coords} id={coords} value={tileNo} disabled key={coords} /> :
            <input type="number" name={coords} id={coords} key={coords} /> 
        )
    })

    return (
        <div className="cell">
            {tiles}
        </div>
    )
})