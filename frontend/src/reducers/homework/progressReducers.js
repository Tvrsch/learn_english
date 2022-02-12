import {
  GET_PROGRESS_REQUEST,
  GET_PROGRESS_SUCCESS,
  GET_PROGRESS_FAIL,
  ADD_PROGRESS_REQUEST,
  ADD_PROGRESS_SUCCESS,
  ADD_PROGRESS_FAIL,
  DELETE_PROGRESS_REQUEST,
  DELETE_PROGRESS_SUCCESS,
  DELETE_PROGRESS_FAIL,
  UPDATE_PROGRESS_REQUEST,
  UPDATE_PROGRESS_SUCCESS,
  UPDATE_PROGRESS_FAIL,
} from "../../constants/progressConstants";

export const progressListReducer = (state = { progress: [] }, action) => {
  switch (action.type) {
    case GET_PROGRESS_REQUEST:
      return { loading: true, progress: [] };

    case GET_PROGRESS_SUCCESS:
      return { loading: false, progress: action.payload.progress, page: action.payload.page, pages: action.payload.pages };

    case GET_PROGRESS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const addProgressReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_PROGRESS_REQUEST:
      return { loading: true, progress: [] };

    case ADD_PROGRESS_SUCCESS:
      return { loading: false, progress: action.payload };

    case ADD_PROGRESS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const deleteProgressReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_PROGRESS_REQUEST:
      return { loading: true, progress: [] };

    case DELETE_PROGRESS_SUCCESS:
      return { loading: false, progress: action.payload };

    case DELETE_PROGRESS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const updateProgressReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_PROGRESS_REQUEST:
      return { loading: true, progress: [] };

    case UPDATE_PROGRESS_SUCCESS:
      return { loading: false, progress: action.payload };

    case UPDATE_PROGRESS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
