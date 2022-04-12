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
  sendHomeworkReducer,
  updateHomeworkReducer,
} from "./reducers/homework/homeworkReducers";
import {
  userDeleteReducer,
  userDetailsReducer,
  userListReducer,
  userLoginReducer,
  userRegisterReducer,
  userUpdateProfileReducer,
  userUpdateReducer
} from "./reducers/homework/userReducers";

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
  sendHomework: sendHomeworkReducer,
  userList: userListReducer,
  userDelete: userDeleteReducer,
  userUpdate: userUpdateReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
});

const userInfoFromStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : null

const initialState = {
  postList: [],
  studentList: [],
  presentationList: [],
  progressList: [],
  userLogin:{userInfo: userInfoFromStorage}
};

const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
