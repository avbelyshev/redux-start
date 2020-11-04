import { connect } from 'react-redux';

import * as contentActions from '../../redux/actions/content';
import BookContent from "./BookContent";

import { ActionCreators } from 'redux-undo';

const filters = {
  SHOW_ALL: () => true,
  SHOW_COMPLETED: chapter => !!chapter.completed,
  SHOW_UNCOMPLETED: chapter => !chapter.completed
}

const mapStateToProps = (state) => ({
  content: state.content.present.map(chapter => (
    {
      ...chapter,
      subsections: chapter.subsections.filter(filters[state.visibilityFilter])
    }
  ))
});

const mapDispatchToProps = (dispatch) => ({
  toggleSubsection: (pIdx, idx) => dispatch(contentActions.toggleSubsection(pIdx, idx)),
  addChapter: (title) => dispatch(contentActions.addChapter(title)),
  addSubsection: (pIdx, title) => dispatch(contentActions.addSubsection(pIdx, title)),
  undo: () => dispatch(ActionCreators.undo())
});

export default connect(mapStateToProps, mapDispatchToProps)(BookContent);
