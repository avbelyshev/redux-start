import React from 'react';

const ContentCounter = ({ chaptersCount, completedChaptersCount, subsectionsCount, completedSubsectionsCount, readiness }) => {
  return (
    <div>
      <div>Chapters: {chaptersCount} (completed: {completedChaptersCount})</div>
      <div>Subsections: {subsectionsCount} (completed: {completedSubsectionsCount})</div>
      <div>Readiness: {readiness.toFixed(1)} %</div>
    </div>
  )
};

export default ContentCounter;
