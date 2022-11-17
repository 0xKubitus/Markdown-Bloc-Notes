// import ... from '...';


const Main = ({ activeNote }) => {
 

  return (
    <div className="app-main"> 
      <div className="app-main-note-preview">
        {activeNote && <h1 className="preview-title">{activeNote.title}</h1>}
        {activeNote && <div className="markdown-preview">activeNote.body</div>} 
      </div>

      <div className="app-main-note-edit">
        <input type="text" 
          id="title" 
          autoFocus 
        />

        <textarea 
          id="body" 
          placeholder="write your note here (Markdown automatically converted to HTML)..." 
        />

        <button>Save Note</button>
      </div>
    </div>

  );

};

export default Main;
