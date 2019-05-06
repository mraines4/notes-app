import React from 'react';

function NotesEditor({text, handleChange}) {
    return (
        <textarea value={text} onChange={e => handleChange(e.target.value)} />
    );
}

export default class NotesDetail extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isEditing: false,
            draftText: props.note.text,
            id: props.note.id
        };
    }
    static getDerivedStateFromProps(props, state) {
        if (props.note.id !== state.id) {
            return {
                id: props.note.id,
                draftText: props.note.text
            };
        } else {
            return null
        }
    }
    render(){
        const {note} = this.props;
        const {isEditing, draftText} = this.state;
        return(
        <div>
            <h2>{note.title}</h2> 
            {isEditing? <NotesEditor text={draftText} handleChange={this._changeDraftText} /> :draftText }
            <button onClick={this._toggleIsEditing}>Toggle</button>
            <button onClick={this._saveDraft} >Save</button>
        </div>
        )
    }
    _toggleIsEditing = () => {
        this.setState({
            isEditing: !this.state.isEditing
        })
    }
    _saveDraft = () => {
        this.props.handleSave(this.state.id, this.state.draftText)
    }
    _changeDraftText = (draftText) => {
        this.setState({
            draftText
        })
    }
}