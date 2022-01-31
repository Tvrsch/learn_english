import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk';
import {composeWithDevTools} from "redux-devtools-extension";
import {postListReducer} from './reducers/postReducers';
import {studentListReducer, presentationListReducer, progressListReducer} from './reducers/homeworkReducers';


const reducer = combineReducers({
    postList: postListReducer,
    studentList: studentListReducer,
    presentationList: presentationListReducer,
    progressList: progressListReducer,
});

const initialState = {
    postList: [],
    studentList: [],
    presentationList: [],
    progressList: [],
};

const middleware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;