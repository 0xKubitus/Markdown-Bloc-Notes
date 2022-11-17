import {useState/*, useEffect*/} from "react";
import uuid from "react-uuid";
import Sidebar from './Sidebar';
import Main from './Main';
import './App.css';


const App = () => {
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(false);

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "Untitled Note",
      body: "",
      lastModified: Date.now()
    };

    setNotes([newNote, ...notes]);
  }

  const onDeleteNote = (idToDelete) => {
    setNotes(notes.filter((note) => note.id !== idToDelete));
    // the above .filter function verifies for each note if the condition that follows is thruthy or not...
    // If not, it will remove the item from the 'notes' state array.
  }
 
  return (
    <div className="App">
      <Sidebar 
        notes={notes} 
        onAddNote={onAddNote} 
        onDeleteNote={onDeleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      <Main />
    </div>
  )
};



export default App;