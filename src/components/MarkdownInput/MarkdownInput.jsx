// import { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';

import './styles.css'

const MarkdownInput = ({editTitleInput, editNoteContent}) => {

    // const handleSave = (event) => {
    //   localStorage.setItem()
    // }


  return (
      <div className="markdown-input-container">

          <div>
              <input type="text" id="markdown-input-title" className="markdown-input" placeholder="new Note's title (no Markdown here)" onChange={editTitleInput} />
          </div>

          <div>
              <TextareaAutosize id="markdown-input-content" className="markdown-input" placeholder="Your Markdown Note's content..." onChange={editNoteContent} autoFocus />
          </div>

          <button id="save-note-btn">Save Note</button>
        
      </div>
  );

};

export default MarkdownInput;