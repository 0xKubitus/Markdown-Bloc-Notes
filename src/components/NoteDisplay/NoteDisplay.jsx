import { useState } from 'react'

import Showdown from 'showdown';

import './styles.css'

const converter = new Showdown.Converter();

export default function NoteDisplay({currentNoteTitle, currentMarkdownContent}) {
    const [convertedNote, setConvertedNote] = useState('');

    const convertedContent = converter.makeHtml(currentMarkdownContent)
    // console.log('convertedContent = ', convertedContent);
    // console.log('typeof convertedContent = ', typeof convertedContent); // => 'string'

    const createMarkup = () => {
      return {__html: convertedContent}
    }
    
    // setConvertedNote(convertedContent);

  return (
    <div className="note-display-container">
          <div className="current-note-display">
              <h1 className="displayed-note-title">{currentNoteTitle}</h1>
              <div className="displayed-note-content" dangerouslySetInnerHTML={createMarkup()}></div>
          </div>
    </div>
  );

};