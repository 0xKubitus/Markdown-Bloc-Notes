import {useState/*, useEffect*/} from "react";
import Sidebar from './Sidebar';
import Main from './Main';
// import uuid from "react-uuid";
import './App.css';


const App = () => {
  const [notes, setNotes] = useState([])

  const onAddNote = () => {
    console.log("add");
  }
 
  return (
    <div className="App">
      <Sidebar notes={notes} onAddNote={onAddNote} />
      <Main />
    </div>
  )
};



export default App;