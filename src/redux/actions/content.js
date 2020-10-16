import * as contentActions from '../actionTypes/content';

export const addChapter = (title) => ({
  type: contentActions.ADD_CHAPTER,
  title
});

export const addSubsection = (pIdx, title) => ({
  type: contentActions.ADD_SUBSECTION,
  pIdx,
  title
});

export const toggleSubsection = (pIdx, idx) => ({
  type: contentActions.TOGGLE_SUBSECTION,
  pIdx,
  idx
});
