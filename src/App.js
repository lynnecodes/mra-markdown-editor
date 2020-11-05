import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './App.css';

export default function App() {
  const [markdown, setMarkdown] = useState('Markdown Editor');

  function handleChange(e) {
    setMarkdown(e.target.value);
  }


  return (
    <div className="app">
      <textarea 
        onChange={handleChange}
        value={markdown} 
      />

      {/*<div 
        className="preview" 
        dangerouslySetInnerHTML={{ __html: marked(markdown) }
        }
      />*/}

      <ReactMarkdown className="preview" source={markdown} />

    </div>
  );
 }