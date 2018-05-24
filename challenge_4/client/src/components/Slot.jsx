import React from 'react';

class Slot extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.color === 'red') {
            var style = 'red';
        } else if (this.props.color === 'black') {
            var style = 'black';
        } else {
            var style = 'white';  
        }

        return (
            <div className="slot" onClick={() => {this.props.columnClicked(this.props.x)}}>
                <div className="circle" style={{backgroundColor : style}}>
                    {this.props.x + ',' + this.props.y}
                </div>
            </div>
        );
    }
}

export default Slot;