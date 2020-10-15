import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';

import Filter from "./components/Filter";
import BookContent from "./components/BookContent";

function App() {
  return (
    <Provider store={store}>
      <div className="flex flex-col h-full items-center justify-center bg-gray-200 text-gray-700">
        Book content
        <Filter />
        <BookContent />
      </div>
    </Provider>
  );
}

export default App;
