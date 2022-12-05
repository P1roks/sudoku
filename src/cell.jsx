import React from "react"
import "./cells.css"

export const Cell = props => {
    let tiles = props.tiles.map((tileNo,idx) => (
        tileNo === 0 ?
        <input type="number" name={`${props.no}${idx}`} id={`${props.no}${idx}`} /> :
        <input type="number" name={`${props.no}${idx}`} id={`${props.no}${idx}`} value={tileNo} disabled /> 
    ))

    return (
        <div className="cell">
            {tiles}
        </div>
    )
}