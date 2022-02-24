import { combineReducers } from "redux";
import { contactReducer } from "./contactReducer";
import { experienceReducer } from "./experienceReducer";
import { educationReducer } from "./educationReducer";
import { summaryReducer } from "./summaryReducer";
import { skillReducer } from "./skillReducer";

const rootReducer = combineReducers({
  contactReducer,
  experienceReducer,
  educationReducer,
  summaryReducer,
  skillReducer,
});

export default rootReducer;
