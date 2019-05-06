import React from 'react';
import styles from './NotesList.module.css';

function NotesListItem({text, handleClick, id}) {
    return (
        <li>
            <a href="#" onClick={(e) => {
                e.preventDefault();
                handleClick(id)
            }}>
                {text}
            </a>
        </li>
    )
}

export default function NotesList({notes, handleSelection}) {
    const items = notes.map(note => <NotesListItem handleClick={handleSelection} id={note.id} key={note.id} text={note.title} />)
    return (
        <ul className={styles.list}>
            {items}
        </ul>
    )
}