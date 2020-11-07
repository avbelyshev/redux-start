import { connect } from 'react-redux';

import { toggleSubsection, addChapter, addSubsection } from '../../redux/slices/content';
import BookContent from "./BookContent";

import { ActionCreators } from 'redux-undo';

const filters = {
  SHOW_ALL: () => true,
  SHOW_COMPLETED: chapter => !!chapter.completed,
  SHOW_UNCOMPLETED: chapter => !chapter.completed
}

const mapStateToProps = (state) => ({
  isLoading: state.content.present.isLoading,
  content: state.content.present.entries.map(chapter => (
    {
      ...chapter,
      subsections: chapter.subsections.filter(filters[state.visibilityFilter])
    }
  ))
});

const mapDispatchToProps = (dispatch) => ({
  toggleSubsection: (pIdx, idx) => dispatch(toggleSubsection(pIdx, idx)),
  addChapter: (title) => dispatch(addChapter(title)),
  addSubsection: (pIdx, title) => dispatch(addSubsection(pIdx, title)),
  undo: () => dispatch(ActionCreators.undo())
});

export default connect(mapStateToProps, mapDispatchToProps)(BookContent);
