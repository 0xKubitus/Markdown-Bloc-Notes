import TextareaAutosize from 'react-textarea-autosize';

import './styles.css'

export default function MarkdownInput() {


  return (
      <div className="markdown-input-container">

          <div>
              <input type="text" id="markdown-input-title" className="markdown-input" placeholder="new Note's title (no Markdown here)" autoFocus />
          </div>

          <div>
              <TextareaAutosize id="markdown-input-content" className="markdown-input"  placeholder="Your Markdown Note's content..." />
          </div>

          <button>Save Note</button>

        
      </div>
  );

};