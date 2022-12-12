import React from "react"
import "./cells.css"

export const Cell = props => {
    let y = props.y - 1;
    // let tiles = props.tiles.map((tileNo,x) => (
    //     tileNo === 0 ?
    //     <input type="number" name={`${props.y}${x % 3 + props.rStart}`} id={`${props.y}${x % 3 + props.rStart}`} /> :
    //     <input type="number" name={`${props.y}${x % 3 + props.rStart}`} id={`${props.y}${x % 3 + props.rStart}`} value={tileNo} disabled /> 
    // ))

    let toDissapear = 2;
    let tiles = props.tiles.map((tileNo,x) => {
        y += x % 3 == 0 ? 1 : 0;
        x = x % 3 + props.rStart;
        let visible = true;
        if(toDissapear > 0 && Math.random() > .7){
            --toDissapear;
            visible = false;
            props.addCoord(Number(`{x}{y}`))
        }
        return (
            visible ?
            <input type="number" name={`${y}${x}`} id={`${y}${x}`} value={tileNo} disabled /> :
            <input type="number" name={`${y}${x}`} id={`${y}${x}`} /> 
        )
    })

    return (
        <div className="cell">
            {tiles}
        </div>
    )
}