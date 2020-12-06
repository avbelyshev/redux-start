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
                data-testid={`chapter-${pIdx}-subsection-${idx}-checkbox`}
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
            addSubsection(pIdx, e.target.elements.title.value);
            e.target.elements.title.value = '';
          }
        }
      >
        {' --- '}
        <input type='text' name='title' data-testid={`chapter-${pIdx}-add-subsection-input`} />
        <button data-testid={`chapter-${pIdx}-add-subsection-btn`}>Add subsection</button>
      </form>
    </div>
  );
};

export default Subsections;
