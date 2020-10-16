import * as contentActions from '../actionTypes/content';

const initialState = [{ title: 'First chapter', subsections: [{ title: 'Subsection 1', completed: false }], completed: false }];

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
      return state.map(
        (chapter, idx) => (
          idx === action.pIdx
            ? toggleSubsection(chapter, action)
            : chapter
        )
      );
    case contentActions.ADD_CHAPTER:
      return state.concat({ title: action.title, subsections: [], completed: false });
    case contentActions.ADD_SUBSECTION:
      return state.map(
        (chapter, idx) => (
          idx === action.pIdx
            ? { ...chapter, subsections: [...chapter.subsections, { title: action.title, completed: false}], completed: false }
            : chapter
        )
      );
    default:
      return state;
  }
};
