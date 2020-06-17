import React from 'react';
import ListItem from './list_item';

export default class ListSet extends React.Component {
    constructor(props) {
        super();

        this.state = {
            title: '',
            time: Date.now(),
        }

        this.items = [];
        
        this.update = this.update.bind(this);
        this.addTodo = this.addTodo.bind(this);
    }

    update(e) {
        this.setState({
            title: e.target.value,
            time: Date.now()
        })
        console.log('updated')
    }

    addTodo() {
        this.items.push(this.state)
        this.setState = {
            title: '',
            time: Date.now()
        };
        console.log(this.items);
        console.log('Todo added successfully');
    }

    render() {
        const { name } = this.props;
        const items = this.items.map((item, i) => (
            <ListItem key={i} item={item} />
        ));

        return(
            <div className='list_set'>
                <h2>{name}</h2>
                <ul className='todo_li'>
                    {items.length > 0 ? items : 'No items'}
                </ul>

                <input type="text" value={this.state.title} onChange={this.update}/>
                <button onClick={() => this.addTodo()}>Add Todo</button>
            </div>
        )
    }
};