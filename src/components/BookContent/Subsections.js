import React from 'react';

const Subsections = ({ chapter, pIdx, toggleSubsection, addSubsection }) => {
  return (
    <div>
      {
        chapter.subsections.map(
          (subsection, idx) => (
            <label key={idx} className='block select-none'>
              {' --- '}
              <input
                onChange={() => toggleSubsection(pIdx, idx)}
                type='checkbox'
                checked={subsection.completed}
              />
              {' '}
              {subsection.title}
            </label>
          )
        )
      }
      <form
        onSubmit={
          (e) => {
            e.preventDefault();
            addSubsection(pIdx, e.target.title.value);
            e.target.title.value = '';
          }
        }
      >
        {' --- '}
        <input type='text' name='title' />
        <button>Add subsection</button>
      </form>
    </div>
  );
};

export default Subsections;
