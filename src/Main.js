export default function Main({ activeNote, onUpdateNote }) {
  const onEditField = (key, value) => {
    onUpdateNote( {
      ...activeNote,
      [key]: value,
      lastModified: Date.now(),
    });
  };

  if(!activeNote) return <div className="no-active-note">No note selected yet</div>

  return (
    <div className="app-main">
      <div className="app-main-note-preview">
        <h1 className="preview-title">{activeNote.title}</h1>
        <div className="markdown-preview">{activeNote.body}</div>
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
          placeholder="write your note here (Markdown automatically converted to HTML)..." 
          value={activeNote.body} 
          onChange={(event) => onEditField("body", event.target.value)} 
        />
      </div>
    </div>

  );

};

