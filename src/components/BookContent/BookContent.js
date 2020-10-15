import React from 'react';

import Subsections from "./Subsections";

const BookContent = ({ content, addChapter, addSubsection, toggleSubsection }) => {
  return (
    <div>
      {
        content.map(
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
            addChapter(e.target.title.value);
            e.target.title.value = '';
          }
        }
      >
        <input type='text' name='title' />
        <button>Add chapter</button>
      </form>
    </div>
  );
};

export default BookContent;
