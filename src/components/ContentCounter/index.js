import { connect } from 'react-redux';

import ContentCounter from "./ContentCounter";

const mapStateToProps = (state) => {
  const chaptersCount = state.content.present.length;
  const completedChaptersCount = state.content.present.filter(chapter => chapter.completed).length;
  const subsectionsCount = state.content.present.reduce((count, c) => count + c.subsections.length, 0);
  const completedSubsectionsCount = state.content.present.reduce((count, c) => count + c.subsections.filter(s => s.completed).length, 0);
  const readiness = subsectionsCount ? (completedSubsectionsCount / subsectionsCount * 100.0) : 0;

  return {
    chaptersCount,
    completedChaptersCount,
    subsectionsCount,
    completedSubsectionsCount,
    readiness
  }
};

export default connect(mapStateToProps, null)(ContentCounter);
