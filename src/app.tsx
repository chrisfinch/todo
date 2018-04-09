import React from 'react';

/*

    Objective: Add description to items

 */

interface IAppProps {
    title: string
}

interface IAppState {
    todoItems?: Array<ITodoItems>,
    itemTitle?: string,
    itemImportance?: number,
    itemDescription: string
}

interface ITodoItems {
    title: string,
    done: boolean,
    description: string,
    importance: number
}

export default class App extends React.Component<IAppProps, IAppState> {

    constructor(props) {
        super(props);

        this.state = {
            todoItems: [],
            itemTitle: '',
            itemImportance: 1,
            itemDescription: ''
        }
    }

    _handleInputChange(event) {
        const val = event.target.value;
        this.setState(oldState => ({
            itemTitle: val
        }));
    }

    _handleDescriptionInputChange(event) {
        const val = event.target.value;
        this.setState(oldState => ({
            itemDescription: val
        }));
    }

    _handleFormSubmit(event) {
        event.preventDefault();
        this.setState(oldState => ({
            todoItems: oldState.todoItems.concat([{
                title: this.state.itemTitle,
                done: false,
                importance: this.state.itemImportance,
                description: this.state.itemDescription
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

    _handleItemImportanceChange(event) {
        const val = event.target.value;
        this.setState(oldState => ({
          itemImportance: val
        }));
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

                        { this.state.todoItems.sort((a, b) => a.importance - b.importance).map((item, index) => (
                            <li
                                className="list__item"
                                key={index}
                            >
                                { item.title }
                                <input
                                    type="checkbox"
                                    checked={ !!item.done }
                                    onChange={ this._handleItemDoneChange.bind(this, index) } />
                                <div>{ item.description }</div>
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

                    <input
                        className="input"
                        placeholder="Enter description..."
                        onChange={ this._handleDescriptionInputChange.bind(this) }
                        value={this.state.itemDescription} />

                    <input
                        className="input input--range"
                        type="range"
                        min="1"
                        max="10"
                        placeholder="importance"
                        value={this.state.itemImportance}
                        onChange={this._handleItemImportanceChange.bind(this)} />

                    <span>{ this.state.itemImportance }</span>

                    <button
                        className="button"
                        onClick={ this._handleFormSubmit.bind(this) }
                    >Create to-do</button>

                </form>

            </div>
        );
    }
}