import React from 'react';

export class TodoSet extends React.Component {
    render() {
        return(
            <div>
                <ul className='todo_ul'>
                    <li>Doing</li>
                    <li>Done</li>
                    <li>To Do</li>
                    <li>Donezo</li>
                    <li>Doodoo</li>
                </ul>
            </div>
        )
    }
}