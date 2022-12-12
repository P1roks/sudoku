import React from "react"
import "./cells.css"

export const Cell = props => {
    let y = props.y - 1;
    // let tiles = props.tiles.map((tileNo,x) => (
    //     tileNo === 0 ?
    //     <input type="number" name={`${props.y}${x % 3 + props.rStart}`} id={`${props.y}${x % 3 + props.rStart}`} /> :
    //     <input type="number" name={`${props.y}${x % 3 + props.rStart}`} id={`${props.y}${x % 3 + props.rStart}`} value={tileNo} disabled /> 
    // ))

    let tiles = props.tiles.map((tileNo,x) => {
        y += x % 3 == 0 ? 1 : 0;
        return (
            tileNo === 0 ?
            <input type="number" name={`${y}${x % 3 + props.rStart}`} id={`${y}${x % 3 + props.rStart}`} /> :
            <input type="number" name={`${y}${x % 3 + props.rStart}`} id={`${y}${x % 3 + props.rStart}`} value={tileNo} disabled /> 
        )
    })

    return (
        <div className="cell">
            {tiles}
        </div>
    )
}