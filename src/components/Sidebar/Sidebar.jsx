import './styles.css'

export default function Sidebar(/*{ notes }*/) {

  const listOfStoredNotes = [];
  
  const DisplayStoredNotes = () => {
    Object.keys(localStorage).forEach(function(note){
      console.log(localStorage.getItem(note));

      return (
        <div>
          {/* <p>{note.index}</p>
          <p>{note.key}</p>  */}
        </div>
      )

   });
      

  }

  if (localStorage.length > 0) {
      // console.log("localStorage = ", localStorage);
      DisplayStoredNotes()
  }


  return (
    <div className="app-sidebar">

      <h3>MY NOTES:</h3>

      {/* 
        <div className="app-sidebar-notes">
            {notes.map((note) => (

              <div className="app-sidebar-note">
                <div className="sidebar-note-title">
                  <strong>TITLE</strong>
                  <button>Delete</button>
                </div>

                <p>Note preview</p>
                <small className="note-meta">Last modified [date]</small>
              </div>
            ))}
        </div> 
      */}

    </div>
  );
};