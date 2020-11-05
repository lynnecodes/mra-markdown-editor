import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [markdown, setMarkdown] = useState('# sup');


  return (
    <div className="app">
      <textarea value={markdown} />

      <div className="preview">Render markdown here</div>
    </div>
  );
}