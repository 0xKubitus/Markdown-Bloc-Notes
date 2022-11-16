import {useEffect, useState} from "react";
import Sidebar from './Sidebar';
import Main from './Main';
// import uuid from "react-uuid";
import './App.css';


const App = () => {
 
  return (
    <div className="App">
      <Sidebar />
      <Main />
    </div>
  )
};



export default App;