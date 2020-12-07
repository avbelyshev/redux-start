import React from 'react';

const Filter = ({ setFilter }) => {
  return (
    <div>
      <FilterButton
        onClick={() => { setFilter('SHOW_ALL') }}
        dataTestId='show-all'
      >
        Show all
      </FilterButton>
      <FilterButton
        onClick={() => { setFilter('SHOW_COMPLETED') }}
        dataTestId='show-completed'
      >
        Show completed
      </FilterButton>
      <FilterButton
        onClick={() => { setFilter('SHOW_UNCOMPLETED') }}
        dataTestId='show-uncompleted'
      >
        Show uncompleted
      </FilterButton>
    </div>
  )
};

export default Filter;

const FilterButton = ({ onClick, dataTestId, children }) => {
  return (
    <button
      onClick={onClick}
      className='mr-3 border border-gray-800 px-3 py-1'
      data-testid={dataTestId}
    >
      {children}
    </button>
  )
};
