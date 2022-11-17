import ReactMarkdown from "react-markdown";


const Main = ({ activeNote, onUpdateNote }) => {
 
  const onEditField = (field, value) => {
    console.log(`onEditField is called; field = ${field}, value = ${value}`);

    onUpdateNote({
      id: activeNote.id,
      [field]: value, // because it will only be either the title or the body of the note that will be updated on each event, let's make this attribute dynamic!
      lastModified: Date.now(),
    })
  };

  if (!activeNote) return <div className="no-active-note">No Active Note</div>;

  return (
    <div className="app-main">
      <div className="app-main-note-edit">
        <input
          type="text"
          id="title"
          placeholder="Note Title"
          value={activeNote.title}
          onChange={(e) => onEditField("title", e.target.value)}
          autoFocus
        />
        <textarea
          id="body"
          placeholder="Write your note here..."
          value={activeNote.body}
          onChange={(e) => onEditField("body", e.target.value)}
        />
      </div>
      <div className="app-main-note-preview">
        <h1 className="preview-title">{activeNote.title}</h1>
        <ReactMarkdown className="markdown-preview">
          {activeNote.body}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default Main;


//   if (!activeNote) return <div className="no-active-note">No note selected</div>

//   return (
//     <div className="app-main"> 
//       <div className="app-main-note-preview">
//         {/* {activeNote && <h1 className="preview-title">{activeNote.title}</h1>}
//         {activeNote && <div className="markdown-preview">activeNote.body</div>}  */}
//         <h1 className="preview-title">{activeNote.title}</h1>
//         <div className="markdown-preview">activeNote.body</div>
//       </div>

//       <div className="app-main-note-edit">
//         <input type="text" 
//           id="title" 
//           value={/*activeNote && */ activeNote.title}
//           onChange={(event) => onEditField("title", event.target.value)}
//           autoFocus 
//         />

//         <textarea 
//           id="body" 
//           placeholder="write your note here (Markdown automatically converted to HTML)..." 
//           value={/*activeNote &&  */ activeNote.body}
//           onChange={(event) => onEditField("body", event.target.value)}
//         />

//         <button>Save Note</button>
//       </div>
//     </div>

//   );

// };

// export default Main;