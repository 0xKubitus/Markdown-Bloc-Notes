import {useState} from "react";
import MarkdownInput from './components/MarkdownInput/MarkdownInput';
import NoteDisplay from './components/NoteDisplay/NoteDisplay';
// import Sidebar from './components/Sidebar';

import './App.css';


function App() {
    const [currentNoteTitle, setCurrentNoteTitle] = useState('');
    const [currentMarkdownContent, setCurrentMarkdownContent] = useState('');

    // GETTING AND SAVING DATA FROM MarkdownInput.jsx COMPONENT AS STATE (to be passed to and used by 'NoteDisplay'):
    const editTitleInput = event => {
        // 👇️ use 'event.target.value' passed from 'MarkdownInput.jsx':
        setCurrentNoteTitle(event.target.value)
        // console.log(currentNoteTitle);
    }

      const editNoteContent = event => {
        // 👇️ use 'event.target.value' passed from 'MarkdownInput.jsx':
        setCurrentMarkdownContent(event.target.value)
        // console.log(currentMarkdownContent);
    }

    const saveNote = event => {


      console.log();
  }

    // --------------------------------------------------------------------

  

  return (
    <div className="App">

        <div className="main-container">
            <NoteDisplay currentNoteTitle={currentNoteTitle} currentMarkdownContent={currentMarkdownContent} />
            <br />
            <hr />
            <MarkdownInput editTitleInput={editTitleInput} editNoteContent={editNoteContent} />
        </div>

        {/* <Sidebar notes={notes} /> */}
    </div>
  );  
};

export default App;