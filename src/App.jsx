import {useState} from "react";
import MarkdownInput from './components/MarkdownInput/MarkdownInput';
import NoteDisplay from './components/NoteDisplay/NoteDisplay';
// import Sidebar from './components/Sidebar';

import './App.css';


function App() {
  const [notes, setNotes] = useState([]);

  return (
    <div className="App">

        <div className="main-container">
            <NoteDisplay />
            <br />
            <hr />
            <MarkdownInput />
        </div>

        {/* <Sidebar notes={notes} /> */}
    </div>
  );  
};

export default App;