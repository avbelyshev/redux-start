import React, { useReducer } from 'react';

const ContentReducer = function (state, action) {
  switch (action.type) {
    case 'TOGGLE_CHAPTER':
      return state.map(
        (chapter, idx) => (
          idx === action.idx
            ? { ...chapter, completed: !chapter.completed }
            : chapter
        )
      );
    case 'ADD_CHAPTER':
      return state.concat({ title: action.title, completed: false });
    default:
      return state;
  }
};

const BookContent = ({ visibilityFilter }) => {
  const [chapters, dispatch] = useReducer(
    ContentReducer,
    [{ title: 'First chapter', completed: false }]
  );

  const filters = {
    SHOW_ALL: () => true,
    SHOW_COMPLETED: chapter => !!chapter.completed,
    SHOW_UNCOMPLETED: chapter => !chapter.completed
  }

  return (
    <div>
      {
        chapters.filter(filters[visibilityFilter]).map(
          (chapter, idx) => (
            <label key={idx} className='block select-none'>
              <input
                onChange={() => dispatch({ type: 'TOGGLE_CHAPTER', idx })}
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
            dispatch({ type: 'ADD_CHAPTER', title: e.target.title.value });
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
