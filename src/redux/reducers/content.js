import * as contentActions from '../actionTypes/content';

const initialState = [{ title: 'First chapter', completed: false }];

export const content = function (state = initialState, action) {
  switch (action.type) {
    case contentActions.TOGGLE_CHAPTER:
      return state.map(
        (chapter, idx) => (
          idx === action.idx
            ? { ...chapter, completed: !chapter.completed }
            : chapter
        )
      );
    case contentActions.ADD_CHAPTER:
      return state.concat({ title: action.title, completed: false });
    default:
      return state;
  }
};
