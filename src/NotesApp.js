import React from 'react';
import NotesList from './NotesList';
import NotesDetail from './NotesDetail';
import styles from './NotesApp.module.css';

export default class NotesApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
        return (
            <div className={styles.app}>
                <div className={styles.list}>
                    <NotesList notes={this.state.notes} />
                </div>
                <div className={styles.detail}>
                    <NotesDetail />
                </div>
            </div>
        )
    }
}