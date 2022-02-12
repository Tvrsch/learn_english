import {
  GET_STUDENTS_REQUEST,
  GET_STUDENTS_SUCCESS,
  GET_STUDENTS_FAIL,
  ADD_STUDENT_REQUEST,
  ADD_STUDENT_SUCCESS,
  ADD_STUDENT_FAIL,
  DELETE_STUDENT_REQUEST,
  DELETE_STUDENT_SUCCESS,
  DELETE_STUDENT_FAIL,
  UPDATE_STUDENT_REQUEST,
  UPDATE_STUDENT_SUCCESS,
  UPDATE_STUDENT_FAIL,
} from "../../constants/studentConstants";

export const studentListReducer = (state = { students: [] }, action) => {
  switch (action.type) {
    case GET_STUDENTS_REQUEST:
      return { loading: true, students: [] };

    case GET_STUDENTS_SUCCESS:
      return { loading: false, students: action.payload.students, page: action.payload.page, pages: action.payload.pages };

    case GET_STUDENTS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const studentAddReducer = (state = { student: {} }, action) => {
  switch (action.type) {
    case ADD_STUDENT_REQUEST:
      return { loading: true, student: {} };

    case ADD_STUDENT_SUCCESS:
      return { loading: false, student: action.payload };

    case ADD_STUDENT_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const studentDeleteReducer = (state = { student: {} }, action) => {
  switch (action.type) {
    case DELETE_STUDENT_REQUEST:
      return { loading: true, student: {} };

    case DELETE_STUDENT_SUCCESS:
      return { loading: false, student: action.payload };

    case DELETE_STUDENT_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const studentUpdateReducer = (state = { student: {} }, action) => {
  switch (action.type) {
    case UPDATE_STUDENT_REQUEST:
      return { loading: true, student: {} };

    case UPDATE_STUDENT_SUCCESS:
      return { loading: false, student: action.payload };

    case UPDATE_STUDENT_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
