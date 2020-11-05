import * as contentActions from '../actionTypes/content';

const initialState = {
  isLoading: false,
  isError: false,
  error: null,
  entries: []
};

const toggleSubsection = (chapter, action) => {
  const Chapter = {
    ...chapter,
    subsections: chapter.subsections.map((subsection, idx) => (
      idx === action.idx
        ? { ...subsection, completed: !chapter.completed }
        : subsection
    ))
  };
  Chapter.completed = Chapter.subsections.length === Chapter.subsections.filter(s => s.completed).length;
  return Chapter;
};

export const content = function (state = initialState, action) {
  switch (action.type) {
    case contentActions.TOGGLE_SUBSECTION:
      return {
        ...state,
        entries: state.entries.map(
          (chapter, idx) => (
            idx === action.pIdx
              ? toggleSubsection(chapter, action)
              : chapter
          )
        )
      };
    case contentActions.ADD_CHAPTER:
      return {
        ...state,
        entries: state.entries.concat({ title: action.title, subsections: [], completed: false })
      };
    case contentActions.ADD_SUBSECTION:
      return {
        ...state,
        entries: state.entries.map(
          (chapter, idx) => (
            idx === action.pIdx
              ? { ...chapter, subsections: [...chapter.subsections, { title: action.title, completed: false}], completed: false }
              : chapter
          )
        )
      };

    case contentActions.FETCH_CHAPTER_REQUEST:
      return {
        ...initialState,
        isLoading: true
      };

    case contentActions.FETCH_CHAPTER_SUCCESS:
      return {
        ...initialState,
        entries: action.response
      };

    case contentActions.FETCH_CHAPTER_FAILURE:
      return {
        ...state,
        isError: true,
        error: action.error
      }
    default:
      return state;
  }
};
