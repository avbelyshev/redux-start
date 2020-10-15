import { connect } from 'react-redux';

import * as contentActions from '../../redux/actionTypes/content';
import BookContent from "./BookContent";

const filters = {
  SHOW_ALL: () => true,
  SHOW_COMPLETED: chapter => !!chapter.completed,
  SHOW_UNCOMPLETED: chapter => !chapter.completed
}

const mapStateToProps = (state) => ({
  content: state.content.map(chapter => (
    {
      ...chapter,
      subsections: chapter.subsections.filter(filters[state.visibilityFilter])
    }
  ))
});

const mapDispatchToProps = (dispatch) => ({
  toggleSubsection: (pIdx, idx) => dispatch({
    type: contentActions.TOGGLE_SUBSECTION,
    pIdx,
    idx
  }),
  addChapter: (title) => dispatch({
    type: contentActions.ADD_CHAPTER,
    title
  }),
  addSubsection: (pIdx, title) => dispatch({
    type: contentActions.ADD_SUBSECTION,
    pIdx,
    title
  })
});

export default connect(mapStateToProps, mapDispatchToProps)(BookContent);
