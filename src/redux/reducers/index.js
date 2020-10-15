import { combineReducers } from "redux";

import { content } from "./content";
import { visibilityFilter } from "./visibilityFilter";

export default combineReducers({
  content,
  visibilityFilter
});
