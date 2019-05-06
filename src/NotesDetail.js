import React from 'react';

export default class NotesDetail extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }
    render() {
        const {note} = this.props
        return (
            <div>
                <h1>{note.title}</h1>
                <p>{note.text}</p>
            </div>
        )
    }
}