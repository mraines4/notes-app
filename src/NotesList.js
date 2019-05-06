import React from 'react';
import styles from './NotesList.module.css';

export default function NotesList(props) {
    return (
        <ul className={styles.list}>
            <li>This is the notes list!</li>
            <li>This is another note</li>
        </ul>
    )
}