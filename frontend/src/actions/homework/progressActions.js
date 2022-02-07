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
} from "../../constants/homeworkConstants";

import axios from "axios";

export const listProgress = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_PROGRESS_REQUEST });

    const { data } = await axios.get(`/progress/?student_id=${id}`);

    dispatch({
      type: GET_PROGRESS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_PROGRESS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const addProgress = (progress) => async (dispatch) => {
  try {
    dispatch({ type: ADD_PROGRESS_REQUEST });
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const { data } = await axios.post(`/progress/add/`, progress, config);

    dispatch({
      type: ADD_PROGRESS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADD_PROGRESS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteProgress = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_PROGRESS_REQUEST });

    const { data } = await axios.delete(`/progress/${id}/delete`);

    dispatch({
      type: DELETE_PROGRESS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_PROGRESS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateProgress = (progress, id) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PROGRESS_REQUEST });
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const { data } = await axios.put(
      `/progress/${id}/update/`,
      progress,
      config
    );

    dispatch({
      type: UPDATE_PROGRESS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_PROGRESS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
