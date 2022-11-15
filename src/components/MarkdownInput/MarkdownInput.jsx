// import { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';

import './styles.css'

const MarkdownInput = ({editTitleInput, editNoteContent, saveNote}) => {

    // const handleSave = (event) => {
    //   localStorage.setItem()
    // }


  return (
      <div className="markdown-input-container">

          <div>
              <input type="text" id="markdown-input-title" className="markdown-input" placeholder="new Note's title (no Markdown here)" onChange={editTitleInput} />
          </div>

          <div>
              <TextareaAutosize id="markdown-input-content" className="markdown-input" placeholder="Start typing your Markdown content here" onChange={editNoteContent} autoFocus />
              {/* <textarea id="markdown-input-content" className="markdown-input" placeholder="Your Markdown Note's content..." rows="5" onChange={editNoteContent} autoFocus /> */}
          </div>

          <button id="save-note-btn" onClick={saveNote}>Save Note</button>
        
      </div>
  );

};

export default MarkdownInput;