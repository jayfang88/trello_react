import React from 'react';

export default class ListSet extends React.Component {
    constructor(props) {
        super();
        this.props = props;
    }

    render() {
        const { name } = this.props;
        return(
            <div>
                <h2>{name}</h2>
            </div>
        )
    }
};