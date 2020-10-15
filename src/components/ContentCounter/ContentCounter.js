import React from 'react';

const ContentCounter = ({ chaptersCount, completedChaptersCount }) => {
  return (
    <div>
      <div>Chapters: {chaptersCount}</div>
      <div>Completed chapters: {completedChaptersCount}</div>
    </div>
  )
};

export default ContentCounter;
