export default function Main({ activeNote, onUpdateNote }) {
  const onEditField = (key, value) => {
    onUpdateNote( {
      id: activeNote.id,
      [key]: value,
      lastModified: Date.now(),
    });
  };

  if(!activeNote) return <div className="no-active-note">No note selected yet</div>

  return (
    <div className="app-main">
      <div className="app-main-note-preview">
        <h1 className="preview-title">Title: </h1>
        <div className="markdown-preview"> note content (body) </div>
      </div>

      <div className="app-main-note-edit">
        <input 
          type="text" 
          id="title" 
          value={activeNote.title} 
          onChange={(event) => onEditField("title", event.target.value)} 
          autoFocus 
        />

        <textarea 
          id="body" 
          placeholder="write your Markdown note here..." 
          value={activeNote.body} 
          onChange={(event) => onEditField("body", event.target.value)} 
        />
      </div>
    </div>

  );

};

