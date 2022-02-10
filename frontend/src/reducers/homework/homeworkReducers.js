import {
  GET_HOMEWORK_REQUEST,
  GET_HOMEWORK_SUCCESS,
  GET_HOMEWORK_FAIL,
  ADD_HOMEWORK_REQUEST,
  ADD_HOMEWORK_SUCCESS,
  ADD_HOMEWORK_FAIL,
  DELETE_HOMEWORK_REQUEST,
  DELETE_HOMEWORK_SUCCESS,
  DELETE_HOMEWORK_FAIL,
  UPDATE_HOMEWORK_REQUEST,
  UPDATE_HOMEWORK_SUCCESS,
  UPDATE_HOMEWORK_FAIL,
  GENERATE_HOMEWORK_REQUEST,
  GENERATE_HOMEWORK_SUCCESS,
  GENERATE_HOMEWORK_FAIL,
  SEND_HOMEWORK_REQUEST,
  SEND_HOMEWORK_SUCCESS,
  SEND_HOMEWORK_FAIL,
} from "../../constants/homeworkConstants";

export const homeworkListReducer = (state = { homework: [] }, action) => {
  switch (action.type) {
    case GET_HOMEWORK_REQUEST:
      return { loading: true, homework: [] };

    case GET_HOMEWORK_SUCCESS:
      return { loading: false, homework: action.payload };

    case GET_HOMEWORK_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const addHomeworkReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_HOMEWORK_REQUEST:
      return { loading: true, homework: [] };

    case ADD_HOMEWORK_SUCCESS:
      return { loading: false, homework: action.payload };

    case ADD_HOMEWORK_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const deleteHomeworkReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_HOMEWORK_REQUEST:
      return { loading: true, homework: [] };

    case DELETE_HOMEWORK_SUCCESS:
      return { loading: false, homework: action.payload };

    case DELETE_HOMEWORK_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const updateHomeworkReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_HOMEWORK_REQUEST:
      return { loading: true, homework: [] };

    case UPDATE_HOMEWORK_SUCCESS:
      return { loading: false, homework: action.payload };

    case UPDATE_HOMEWORK_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const generateHomeworkReducer = (state = {}, action) => {
  switch (action.type) {
    case GENERATE_HOMEWORK_REQUEST:
      return { loading: true, homework: {} };

    case GENERATE_HOMEWORK_SUCCESS:
      return { loading: false, homework: action.payload };

    case GENERATE_HOMEWORK_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const sendHomeworkReducer = (state = {}, action) => {
  switch (action.type) {
    case SEND_HOMEWORK_REQUEST:
      return { loading: true, homework: {} };

    case SEND_HOMEWORK_SUCCESS:
      return { loading: false, homework: action.payload };

    case SEND_HOMEWORK_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};