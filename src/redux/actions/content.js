import * as contentActions from '../actionTypes/content';

import { API_CALL } from '../middleware/API';

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

export const fetchChapters = () => ({
  [API_CALL]: {
    endpoint: '/chapters',
    method: 'GET',
    types: [
      contentActions.FETCH_CHAPTER_REQUEST,
      contentActions.FETCH_CHAPTER_SUCCESS,
      contentActions.FETCH_CHAPTER_FAILURE
    ]
  }
});
