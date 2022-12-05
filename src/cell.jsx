import React from "react"
import "./cells.css"

export const Cell = props => {
    let tiles = props.tiles.map(tileNo => (
        <input type="number" value={tileNo} />
    ))

    return (
        <div className="cell">
            {tiles}
        </div>
    )
}