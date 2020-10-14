import React, { useReducer } from 'react';

import BookContent from "./BookContent";
import Filter from "./Filter";

const FilterReducer = function (state, action) {
  switch (action.type) {
    case 'SET_FILTER':
      return action.filter;
    default:
      return state;
  }
};

function App() {
  const [visibilityFilter, dispatch] = useReducer(
    FilterReducer,
    'SHOW_ALL'
  );

  return (
    <div className="flex flex-col h-full items-center justify-center bg-gray-200 text-gray-700">
      Book content
      <Filter dispatch={dispatch} />
      <BookContent visibilityFilter={visibilityFilter} />
    </div>
  );
}

export default App;
