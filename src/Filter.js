import React from 'react';

const Filter = ({ dispatch }) => {
  return (
    <div>
      <FilterButton
        onClick={() => { dispatch({ type: 'SET_FILTER', filter: 'SHOW_ALL' })}}
      >
        Show all
      </FilterButton>
      <FilterButton
        onClick={() => { dispatch({ type: 'SET_FILTER', filter: 'SHOW_COMPLETED' })}}
      >
        Show completed
      </FilterButton>
      <FilterButton
        onClick={() => { dispatch({ type: 'SET_FILTER', filter: 'SHOW_UNCOMPLETED' })}}
      >
        Show uncompleted
      </FilterButton>
    </div>
  )
};

export default Filter;

const FilterButton = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className='mr-3 border border-gray-800 px-3 py-1'
    >
      {children}
    </button>
  )
};
