import React from "react"
import "./cells.css"

export const Cell = props => {
    let tiles = props.tiles.map(tileNo => (
        tileNo === 0 ?
        <input type="number" name="" id="" /> :
        <input type="number" name="" id="" value={tileNo} disabled /> 
    ))

    return (
        <div className="cell">
            {tiles}
        </div>
    )
}