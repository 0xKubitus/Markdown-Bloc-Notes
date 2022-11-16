// import ... from '...';


const Main = () => {
 

  return (
    <div className="app-main"> 
      <div className="app-main-note-preview">
        <h1 className="preview-title">TITLE</h1>
        <div className="markdown-preview">note preview</div> 
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
