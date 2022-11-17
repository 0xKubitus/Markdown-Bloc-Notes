import {useState, useEffect} from "react";
import uuid from "react-uuid";
import Sidebar from './Sidebar';
import Main from './Main';
import './App.css';


const App = () => {
  const [notes, setNotes] = useState(localStorage.notes ? JSON.parse(localStorage.notes) : []);
  const [activeNote, setActiveNote] = useState(false);

  // side effect for when the notes are changing (new note, note update, note deleted) => localStorage
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes))
  }, [notes]);

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "Untitled Note",
      body: "",
      lastModified: Date.now()
    };

    setNotes([newNote, ...notes]);
  };


  const onUpdateNote = (updatedNote) => {
    const updatedNotesArray = notes.map((note) => {
      if(note.id === activeNote) {
        return updatedNote;
      } 
        return note;
    });
    setNotes(updatedNotesArray);
  };


  const onDeleteNote = (idToDelete) => {
    setNotes(notes.filter((note) => note.id !== idToDelete));
    // the above .filter function verifies for each note if the condition that follows is thruthy or not...
    // If not, it will remove the item from the 'notes' state array.
  };


  // RETURN THE ENTIRE OBJECT FROM OUR 'notes' STATE WHICH 'id' MATCHES THE ONE FROM 'activeNote':
  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote);
  };



  return (
    <div className="App">
      <Sidebar 
        notes={notes} 
        onAddNote={onAddNote} 
        onDeleteNote={onDeleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />
    </div>
  )
};



export default App;