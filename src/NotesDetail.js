import React from 'react';

export default function NotesDetail({note}) {
    return (
        <div>
            <h1>{note.title}</h1>
            <p>{note.text}</p>
        </div>
    )
}