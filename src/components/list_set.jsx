import React from 'react';

export default class ListSet extends React.Component {
    constructor(props) {
        super();
        this.state = {
            title: '',
            time: Date.now(),
        }
        this.props = props;

        this.update = this.update.bind(this);
        this.addTodo = this.addTodo.bind(this);
    }

    update(e) {
        console.log(e);
        this.setState({
            title: e.target.value,
            time: Date.now()
        })
        console.log('updated')
    }

    addTodo() {

        console.log('Todo added successfully')
    }

    render() {
        const { name } = this.props;
        return(
            <div className='list_set'>
                <h2>{name}</h2>
                <ul className='todo_li'>
                </ul>

                <input type="text" value={this.state.title} onChange={this.update}/>
                <button onClick={() => this.addTodo()}>Add Todo</button>
            </div>
        )
    }
};