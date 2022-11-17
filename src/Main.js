import ReactMarkdown from "react-markdown";
import Showdown from 'showdown'; // this lib is less practical than "react-markdown" above so i won't use it here.


const converter = new Showdown.Converter();


const Main = ({ activeNote, onUpdateNote }) => {
  
  const onEditField = (field, value) => {
    console.log(`onEditField is called; field = ${field}, value = ${value}`);

    onUpdateNote({
      id: activeNote.id,
      [field]: value, // because it will only be either the title or the body of the note that will be updated on each event, let's make this attribute dynamic!
      lastModified: Date.now(),
    })
  };


  if (!activeNote) {
    return <div className="no-active-note">No note selected</div>
  } else {
    const convertedContent = converter.makeHtml(activeNote.body)
    // console.log('convertedContent = ', convertedContent);
    // console.log('typeof convertedContent = ', typeof convertedContent); // => 'string'

    const createMarkup = () => {
      return {__html: convertedContent}
    }

    return (
      <div className="app-main"> 
        <div className="app-main-note-preview">
          <h1 className="preview-title">{activeNote.title}</h1>
          <div className="markdown-preview"dangerouslySetInnerHTML={createMarkup()}></div>
          {/* <ReactMarkdown className="markdown-preview">{activeNote.body}</ReactMarkdown> */}
        </div>

        <div className="app-main-note-edit">
          <input type="text" 
            id="title" 
            value={/*activeNote && */ activeNote.title}
            onChange={(event) => onEditField("title", event.target.value)}
            autoFocus 
          />

          <textarea 
            id="body" 
            placeholder="write your note here (Markdown automatically converted to HTML)..." 
            value={/*activeNote &&  */ activeNote.body}
            onChange={(event) => onEditField("body", event.target.value)}
          />

          <button>Save Note</button>
        </div>
      </div>
    );

    };
    
  }

export default Main;