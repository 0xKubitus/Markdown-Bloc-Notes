import {useState} from "react";
import MarkdownInput from './components/MarkdownInput/MarkdownInput';
import NoteDisplay from './components/NoteDisplay/NoteDisplay';
// import Sidebar from './components/Sidebar';

import './App.css';


function App() {
  const [currentNoteTitle, setCurrentNoteTitle] = useState('');
  const [currentNoteContent, setCurrentNoteContent] = useState('');

  const saveTitleInput = event => {
      // 👇️ use 'event.target.value' passed from Child component:
      setCurrentNoteTitle(event.target.value)
      console.log(currentNoteTitle);
  }

    const saveNoteContent = event => {
      // 👇️ use 'event.target.value' passed from Child component:
      setCurrentNoteContent(event.target.value)
      console.log(currentNoteContent);
  }

  return (
    <div className="App">

        <div className="main-container">
            <NoteDisplay currentNoteTitle={currentNoteTitle} currentNoteContent={currentNoteContent} />
            <br />
            <hr />
            <MarkdownInput saveTitleInput={saveTitleInput} saveNoteContent={saveNoteContent} />
        </div>

        {/* <Sidebar notes={notes} /> */}
    </div>
  );  
};

export default App;