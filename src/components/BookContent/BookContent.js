import React from 'react';
import { Link } from 'react-router-dom';

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
              <Link to={`/chapters/${chapter._id}`}>View</Link>
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
      <button className='block mt-5 border border-gray-800 px-2 py-1' onClick={() => { undo(); }}>Undo</button>
    </div>
  );
};

export default BookContent;
