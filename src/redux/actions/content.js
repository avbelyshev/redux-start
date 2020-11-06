import * as contentActions from '../actionTypes/content';
import axios from 'axios';

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

export const fetchChapters = () => (
  (dispatch) => {
    dispatch({
      type: contentActions.FETCH_CHAPTER_REQUEST
    });

    return axios({
      method: 'GET',
      url: 'https://books-82c9.restdb.io/rest/chapters',
      headers: {
        'x-apikey': '5fa39ed4863959728838502d'
      }
    }).then(res => dispatch({
      type: contentActions.FETCH_CHAPTER_SUCCESS,
      response: res.data
    })).catch(error => dispatch({
      type: contentActions.FETCH_CHAPTER_FAILURE,
      error
    }))
  }
);
