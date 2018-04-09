import React from 'react';

/*

    Objective: Add description to items

 */

interface IAppProps {
    title: string
}

interface IAppState {
    todoItems?: Array<any>,
    itemTitle?: string
}

export default class App extends React.Component<IAppProps, IAppState> {

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

    _handleFormSubmit(event) {
        event.preventDefault();
        this.setState(oldState => ({
            todoItems: oldState.todoItems.concat([{
                title: this.state.itemTitle,
                done: false
            }]),
            itemTitle: ''
        }));
    }

    _handleItemDoneChange(itemIndex, event) {
        const checked = event.target.checked;
        this.setState(oldState => ({
            todoItems: oldState.todoItems.map((item, index) => {
                if (index === itemIndex) item.done = checked;
                return item
            })
        }))
    }

    render () {
        return (
            <div
                className="app"
            >
                <h1>{ this.props.title }</h1>

                <hr/>

                { this.state.todoItems.length ? (
                    <ul
                        className="list"
                    >

                        { this.state.todoItems.map((item, index) => (
                            <li
                                className="list__item"
                                key={index}
                            >
                                { item.title }
                                <input
                                    type="checkbox"
                                    checked={ !!item.done }
                                    onChange={ this._handleItemDoneChange.bind(this, index) } />
                            </li>
                        )) }

                    </ul>
                ) : (
                    <div>Nothing to do today!</div>
                )}

                <hr/>

                <form
                    onSubmit={ this._handleFormSubmit.bind(this) }
                >

                    <input
                        className="input"
                        placeholder="Enter To-do title..."
                        onChange={ this._handleInputChange.bind(this) }
                        value={this.state.itemTitle} />

                    <button
                        className="button"
                        onClick={ this._handleFormSubmit.bind(this) }
                    >Create to-do</button>

                </form>

            </div>
        );
    }
}