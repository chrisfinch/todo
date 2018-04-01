import React from 'react';
import Button from './button.component.jsx';
import List from './list.component.jsx';

export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            todoItems: [],
            itemTitle: ''
        }
    }

    _handleInputChange(event) {
        const val = event.target.value;
        this.setState(oldState => ({
            itemTitle: val
        }));
    }

    _handleButtonClick(event) {
        this.setState(oldState => ({
            todoItems: oldState.todoItems.concat([{
                title: this.state.itemTitle,
                done: false
            }]),
            itemTitle: ''
        }));
    }

    render () {
        return (
            <div className="app">
                <h1>My Todo List</h1>

                <hr/>

                <List items={ this.state.todoItems }/>

                <hr/>

                <input className="input" placeholder="Enter Todo title..." onChange={ this._handleInputChange.bind(this) } value={this.state.itemTitle} />

                <Button text="Create Todo" onButtonClick={ this._handleButtonClick.bind(this) } />

            </div>
        );
    }
}