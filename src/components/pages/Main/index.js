import React from 'react';

import Filter from "../../Filter";
import BookContent from "../../BookContent";
import ContentCounter from "../../ContentCounter";

const Main = () => (
  <div className="flex flex-col h-full items-center justify-center bg-gray-200 text-gray-700">
    Book content
    <Filter />
    <BookContent />
    <ContentCounter />
  </div>
);

export default Main;
