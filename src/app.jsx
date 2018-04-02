import React from 'react';
import Button from './button.component';
import List from './list.component';

/**
 * Objectives:
 *
 * Add toggle component to list items to record 'done' status
 * Add 'importance' value for each list item and display in order of importance
 */

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