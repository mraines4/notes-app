import React from 'react';

function NotesEditor({text}) {
    return (
        <textarea value={text} />
    );
}

export default class NotesDetail extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isEditing: false
        }
    }
    render() {
        const {note} = this.props;
        const {isEditing} = this.state;
        return (
            <div>
                <h1>{note.title}</h1>
                {isEditing ? <NotesEditor text={note.text} /> : <p>{note.text}</p>}
                <br />
                <button onClick={this._changeEdit}>Toggle</button>
            </div>
        )
    }

    _changeEdit = () => {
        this.setState({
            isEditing: !this.state.isEditing
        })
    }
}