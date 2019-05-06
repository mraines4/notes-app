import React from 'react';
import NotesList from './NotesList';
import NotesDetail from './NotesDetail';
import styles from './NotesApp.module.css';

export default class NotesApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedNote: '1001',
            notes: [
                {
                    id: '1001',
                    title: 'first note',
                    text: 'Hey this is the first note',
                },
                {
                    id: '1002',
                    title: 'Second note',
                    text: 'Ohh this is the second one',
                },
                {
                    id: '1003',
                    title: 'third note',
                    text: 'Wowza this is the 3rd note',
                },
            ]
        }
    }

    render() {
        const theNote = this.state.notes.find(note => this.state.selectedNote === note.id)
        return (
            <div className={styles.app}>
                <div className={styles.list}>
                    <NotesList handleSelection={this._selectNote} notes={this.state.notes} />
                </div>
                <div className={styles.detail}>
                    <NotesDetail note={theNote} handleSave={this._updateNote} />
                </div>
            </div>
        )
    }

    _selectNote = (id) => {
        this.setState({
            selectedNote: id
        })
    }

    _updateNote = (idToUpdate, newText) => {
        const updatedNotes1 = this.state.notes.map(note => {
            if (note.id === idToUpdate) {
                return {
                    ...note,      // spread out all existing key-value pairs
                    text: newText // overwrite just the text property
                }
            } else {
                return {...note};
            }
        });
        this.setState({
            notes: updatedNotes1
        })

        // const updatedNotes2 = this.state.notes.filter(note => {
        //     return note.id !== idToUpdate;
        // });
        // const theNoteToUpdate = this.state.notes.find(note => note.id === idToUpdate);
        // this.setState({
        //     notes: [
        //         ...updatedNotes2,
        //         {
        //             theNoteToUpdate,
        //             text: newText
        //         }
        //     ]
        // })
    }
}