import {useState/*, useEffect*/} from "react";
import Sidebar from './Sidebar';
import Main from './Main';
// import uuid from "react-uuid";
import './App.css';


const App = () => {
  const [notes, setNotes] = useState([])
 
  return (
    <div className="App">
      <Sidebar notes={notes} />
      <Main />
    </div>
  )
};



export default App;