import React from 'react';
import { connect } from 'react-redux';

const Chapter = ({ chapter, isLoading }) => (
  isLoading
    ? <div>Loading...</div>
    : <div>{chapter.title}</div>
);

const ChapterContainer = connect(
  (state, ownProps) => ({
    isLoading: state.content.present.isLoading,
    chapter: state.content.present.entries.find(
      chapter => chapter._id === ownProps.match.params.id
    )
  })
)(Chapter);

export default ChapterContainer;
