import { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';

import './styles.css'

const MarkdownInput = () => {
  const [inputTitle, setInputTitle] = useState('');
  const [mkdInput, setMkdInput] = useState('');

  const updateInputTitle = (event) => {
    setInputTitle(event.target.value);
    console.log(inputTitle);
  };

  const updateMkdInput = (event) => {
    setMkdInput(event.target.value);
    console.log(mkdInput);
  };


  return (
      <div className="markdown-input-container">

          <div>
              <input type="text" id="markdown-input-title" className="markdown-input" placeholder="new Note's title (no Markdown here)" onChange={updateInputTitle} />
          </div>

          <div>
              <TextareaAutosize id="markdown-input-content" className="markdown-input" placeholder="Your Markdown Note's content..." onChange={updateMkdInput} autoFocus />
          </div>

          <button id="save-note-btn">Save Note</button>

        
      </div>
  );

};

export default MarkdownInput;