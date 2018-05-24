import React from 'react';
import Slot from './Slot.jsx'

const Column = (props) => {
    return (
        <div className="column">
            {props.column.map((color, i) => <Slot x={props.colNumber} y={i} columnClicked={props.columnClicked} key={i} color={color}/>)}
        </div>
    )
}

export default Column;