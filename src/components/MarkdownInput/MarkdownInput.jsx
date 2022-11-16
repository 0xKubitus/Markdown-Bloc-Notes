// import { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';

import './styles.css'

const MarkdownInput = ({editTitleInput, editNoteContent, saveNote}) => {




  return (
      <div className="markdown-input-container">

          {/* <div>
              <input type="text" id="markdown-input-title" className="markdown-input" placeholder="new Note's title (no Markdown here)" onChange={editTitleInput} />
          </div> */}

          <div>
              <TextareaAutosize 
                  id="markdown-input-content" 
                  className="markdown-input" 
                  placeholder="Start typing your Markdown content here" 
                  onChange={editNoteContent} 
                  autoFocus 
              />
              {/* <textarea id="markdown-input-content" className="markdown-input" placeholder="Your Markdown Note's content..." rows="5" onChange={editNoteContent} autoFocus /> */}
          </div>

          <div style={{ display: "flex", justifyContent: "center", alignItems: "center"/*, paddingRight: "20px"*/}}>
              <div>
                <label>
                  <span style={{paddingRight: "30px"}}>
                  new note's title: 
                  </span>
                  <input 
                    type="text" 
                    id="markdown-input-title" 
                    className="markdown-input" 
                    placeholder="(no Markdown here)"
                    style={{paddingLeft: "20px"}}
                    onChange={editTitleInput} 
                  />
                </label>

              </div>

              <button id="save-note-btn" onClick={saveNote}>Save Note</button>
          </div>
      </div>
  );

};

export default MarkdownInput;