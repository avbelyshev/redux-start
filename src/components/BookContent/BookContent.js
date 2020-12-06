import React from 'react';

import Subsections from "./Subsections";

const BookContent = ({ isLoading, undo, content, addChapter, addSubsection, toggleSubsection }) => {
  if (isLoading) return <div>Loading...</div>

  return (
    <div>
      {
        content && content.map(
          (chapter, idx) => (
            <div key={idx}>
              <label className='block select-none'>
                <input
                  readOnly
                  type='checkbox'
                  checked={chapter.completed}
                />
                {' '}
                {chapter.title}
              </label>
              <Subsections chapter={chapter} pIdx={idx} toggleSubsection={toggleSubsection} addSubsection={addSubsection} />
            </div>
          )
        )
      }
      <form
        onSubmit={
          (e) => {
            e.preventDefault();
            addChapter(e.target.elements.title.value);
            e.target.elements.title.value = '';
          }
        }
      >
        <input type='text' name='title' data-testid='add-chapter-input' />
        <button data-testid='add-chapter-btn'>Add chapter</button>
      </form>
      <button
        className='block mt-5 border border-gray-800 px-2 py-1'
        onClick={() => { undo(); }}
      >
        Undo
      </button>
    </div>
  );
};

export default BookContent;
