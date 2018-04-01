import React from 'react';

export default class Button extends React.Component {
    render () {

        const defaultStyle = {
            border: '1px solid #000',
            padding: '12px',
            width: '100px',
            cursor: 'pointer'
        };

        return (
            <div
                className={'button' + this.props.customClass}
                style={ Object.assign({}, defaultStyle, { backgroundColor: this.props.color }) }
                onClick={ this.props.onButtonClick }
            >

                { this.props.text || 'My button' }

            </div>
        );
    }
}