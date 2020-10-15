import { connect } from 'react-redux';

import * as contentActions from '../../redux/actionTypes/content';
import BookContent from "./BookContent";

const filters = {
  SHOW_ALL: () => true,
  SHOW_COMPLETED: chapter => !!chapter.completed,
  SHOW_UNCOMPLETED: chapter => !chapter.completed
}

const mapStateToProps = (state) => ({
  content: state.content.filter(filters[state.visibilityFilter])
});

const mapDispatchToProps = (dispatch) => ({
  toggleChapter: (idx) => dispatch({
    type: contentActions.TOGGLE_CHAPTER,
    idx
  }),
  addChapter: (title) => dispatch({
    type: contentActions.ADD_CHAPTER,
    title
  })
});

export default connect(mapStateToProps, mapDispatchToProps)(BookContent);
