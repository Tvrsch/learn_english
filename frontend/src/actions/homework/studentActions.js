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

import axios from "axios";

export const listStudents = (keyword= "") => async (dispatch) => {
  try {
    dispatch({ type: GET_STUDENTS_REQUEST });

    const { data } = await axios.get(`/students${keyword}`);

    dispatch({
      type: GET_STUDENTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_STUDENTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const addStudent = (info) => async (dispatch) => {
  try {
    dispatch({ type: ADD_STUDENT_REQUEST });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const { data } = await axios.post(`/students/add/`, info, config);

    dispatch({
      type: ADD_STUDENT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADD_STUDENT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteStudent = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_STUDENT_REQUEST });

    const { data } = await axios.delete(`/students/${id}/delete`);

    dispatch({
      type: DELETE_STUDENT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_STUDENT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateStudent = (info, id) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_STUDENT_REQUEST });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const { data } = await axios.put(`/students/${id}/update/`, info, config);

    dispatch({
      type: UPDATE_STUDENT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_STUDENT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
