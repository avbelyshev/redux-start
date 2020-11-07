import { combineReducers } from "redux";

import content from "../slices/content";
import { visibilityFilter } from "./visibilityFilter";

import undoable from 'redux-undo';

export default combineReducers({
  content: undoable(content),
  visibilityFilter
});
