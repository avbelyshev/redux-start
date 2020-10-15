import React from 'react';

const Filter = ({ setFilter }) => {
  return (
    <div>
      <FilterButton
        onClick={() => { setFilter('SHOW_ALL') }}
      >
        Show all
      </FilterButton>
      <FilterButton
        onClick={() => { setFilter('SHOW_COMPLETED') }}
      >
        Show completed
      </FilterButton>
      <FilterButton
        onClick={() => { setFilter('SHOW_UNCOMPLETED') }}
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
