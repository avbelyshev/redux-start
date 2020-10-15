import { connect } from 'react-redux';

import ContentCounter from "./ContentCounter";

const mapStateToProps = (state) => {
  const chaptersCount = state.content.length;
  const completedChaptersCount = state.content.filter(chapter => chapter.completed).length;

  return {
    chaptersCount,
    completedChaptersCount
  }
};

export default connect(mapStateToProps, null)(ContentCounter);
