// src/WordCounter.js
import React, { useState } from 'react';

const WordCounter = () => {
  const [text, setText] = useState('');
  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <textarea
        placeholder="Type something..."
        value={text}
        onChange={handleInputChange}
        rows={4}
        cols={50}
      />
      <p>Word Count: {wordCount}</p>
    </div>
  );
};

export default WordCounter;
