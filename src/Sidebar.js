// import ... from '...';


const Sidebar = ( { notes, onAddNote, onDeleteNote, activeNote, setActiveNote } ) => { 
  
  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>0xKubitus Notes</h1>
        <button onClick={onAddNote}>Create new Note</button>
      </div>
      <div className="app-sidebar-notes">
        {notes.map((note) =>(
          <div 
            className={`app-sidebar-note ${note.id === activeNote && "active"}`} 
            //  conditionnal className: if note.id corresponds to the one saved in activeNote state, then add the 'active' class 
            onClick={() => setActiveNote(note.id)}
          >
            <div className="sidebar-note-title">
              <strong>{note.title}</strong>
              <button onClick={() => onDeleteNote(note.id)}>Delete</button>
            </div>
            
            <p>{note.body && note.body.substr(0, 100) + '...'}</p> {/* => If there is a note.body, return only the 1st 100characters */}

            <small className="note-meta">Last modified {new Date(note.lastModified).toLocaleDateString("fr-FR", {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
              })}
            </small>
          </div>
        ))}

      </div>
    </div>













      


  );
};

export default Sidebar;