import React, { useState } from 'react';

const Task_8 = () => {
    const [notes, setNotes] = useState([]);
    const [currentNote, setCurrentNote] = useState('');
    const [editingNoteIndex, setEditingNoteIndex] = useState(null);

    // Додавання нової нотатки
    const addNote = () => {
        const timestamp = new Date().toLocaleTimeString();
        const newNote = {
            title: `Note ${notes.length + 1}`,
            content: currentNote,
            time: timestamp
        };
        setNotes([...notes, newNote]);
        setCurrentNote('');
    };

    // Видалення нотатки
    const deleteNote = (index) => {
        setNotes(notes.filter((_, i) => i !== index));
    };

    // Редагування нотатки
    const editNote = (index) => {
        setCurrentNote(notes[index].content);
        setEditingNoteIndex(index);
    };

    // Збереження змін у редагованій нотатці
    const saveEditedNote = () => {
        const updatedNotes = [...notes];
        updatedNotes[editingNoteIndex].content = currentNote;
        setNotes(updatedNotes);
        setCurrentNote('');
        setEditingNoteIndex(null);
    };

    return (
        <div>
            <textarea
                value={currentNote}
                onChange={(e) => setCurrentNote(e.target.value)}
                rows={4}
                cols={50}
                style={{resize:'none'} }
            />
            <button onClick={editingNoteIndex !== null ? saveEditedNote : addNote}>
                {editingNoteIndex !== null ? 'Save' : 'Add note'}
            </button>
            {notes.map((note, index) => (
                <div key={index}>
                    <h3>{note.title}</h3>
                    <p>{note.content}</p>
                    <p>{note.time}</p>
                    <button onClick={() => deleteNote(index)}>Delete</button>
                    <button onClick={() => editNote(index)}>Edit</button>
                </div>
            ))}
        </div>
    );
};

export default Task_8;
