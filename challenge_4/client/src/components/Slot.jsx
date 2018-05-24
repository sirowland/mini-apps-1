import React from 'react';

const Slot = (props) => {{
        if (props.color === 'red') {
            var style = 'red';
        } else if (props.color === 'black') {
            var style = 'black';
        } else {
            var style = 'white';  
        }

        return (
            <div className="slot" onClick={() => {props.columnClicked(props.x)}}>
                <div className="circle" style={{backgroundColor : style}}>
                    {props.x + ',' + props.y}
                </div>
            </div>
        );
    }
}

export default Slot;