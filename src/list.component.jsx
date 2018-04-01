import React from 'react';

export default class List extends React.Component {
    render () {

        return this.props.items.length ? (
            <ul
                className="list"
            >

                { this.props.items.map((item, index) => (
                    <li className="list__item" key={index}>
                        { item.title }
                        { item.done }
                    </li>
                )) }

            </ul>
        ) : <div>Nothing to do today!</div>;
    }
}