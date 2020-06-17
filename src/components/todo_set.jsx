import React from 'react';
import ListSet from './list_set';

export class TodoSet extends React.Component {
    render() {
        return(
            <div>
                <ul className='todo_main'>
                    <li className='list_set'><ListSet name={'Doing'}/></li>
                    <li className='list_set'><ListSet name={'Done'} /></li>
                    <li className='list_set'><ListSet name={'To Do'} /></li>
                    <li className='list_set'><ListSet name={'Donezo'} /></li>
                    <li className='list_set'><ListSet name={'Doodoo'} /></li>
                </ul>
            </div>
        )
    }
};