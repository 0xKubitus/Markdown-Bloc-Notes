import './styles.css'

export default function NoteDisplay({currentNoteTitle, currentNoteContent}) {

  
  return (
    <div className="note-display-container">
          <div className="current-note-display">
              <h1 className="displayed-note-title">{currentNoteTitle}</h1>
              <div className="displayed-note-content">{currentNoteContent}</div>
          </div>
    </div>
  );

};