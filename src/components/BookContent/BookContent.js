import React from 'react';

const BookContent = ({ content, toggleChapter, addChapter }) => {
  return (
    <div>
      {
        content.map(
          (chapter, idx) => (
            <label key={idx} className='block select-none'>
              <input
                onChange={() => toggleChapter(idx)}
                type='checkbox'
                checked={chapter.completed}
              />
              {' '}
              {chapter.title}
            </label>
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
