import React from 'react';
import ListSet from './list_set';

export class TodoSet extends React.Component {
    render() {
        return(
            <div>
                <h1 className='title'>To Do List</h1>
                <ul className='todo_main'>
                    <li><ListSet name={'Doing'}/></li>
                    <li><ListSet name={'Done'} /></li>
                    <li><ListSet name={'To Do'} /></li>
                    <li><ListSet name={'Donezo'} /></li>
                    <li><ListSet name={'Doodoo'} /></li>
                </ul>
            </div>
        )
    }
};