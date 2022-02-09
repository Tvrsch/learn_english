import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { postListReducer } from "./reducers/postReducers";
import {
  studentAddReducer,
  studentDeleteReducer,
  studentListReducer,
  studentUpdateReducer,
} from "./reducers/homework/studentReducers";
import {
  presentationListReducer,
  addPresentationReducer,
  deletePresentationReducer,
  updatePresentationReducer,
} from "./reducers/homework/presentationReducers";
import {
  deleteProgressReducer,
  addProgressReducer,
  progressListReducer,
  updateProgressReducer,
} from "./reducers/homework/progressReducers";
import {
  addHomeworkReducer,
  deleteHomeworkReducer,
  generateHomeworkReducer,
  homeworkListReducer,
  updateHomeworkReducer,
} from "./reducers/homework/homeworkReducers";

const reducer = combineReducers({
  postList: postListReducer,
  studentList: studentListReducer,
  addStudent: studentAddReducer,
  deleteStudent: studentDeleteReducer,
  updateStudent: studentUpdateReducer,
  presentationList: presentationListReducer,
  addPresentation: addPresentationReducer,
  deletePresentation: deletePresentationReducer,
  updatePresentation: updatePresentationReducer,
  progressList: progressListReducer,
  addProgress: addProgressReducer,
  deleteProgress: deleteProgressReducer,
  updateProgress: updateProgressReducer,
  homeworkList: homeworkListReducer,
  addHomework: addHomeworkReducer,
  deleteHomework: deleteHomeworkReducer,
  updateHomework: updateHomeworkReducer,
  generateHomework: generateHomeworkReducer,
});

const initialState = {
  postList: [],
  studentList: [],
  presentationList: [],
  progressList: [],
};

const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
