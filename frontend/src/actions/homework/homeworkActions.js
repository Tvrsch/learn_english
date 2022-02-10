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

import axios from "axios";

export const listHomework = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_HOMEWORK_REQUEST });

    const { data } = await axios.get(`/homework/?presentation_id=${id}`);

    dispatch({
      type: GET_HOMEWORK_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_HOMEWORK_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const addHomework = (homework) => async (dispatch) => {
  try {
    dispatch({ type: ADD_HOMEWORK_REQUEST });
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const { data } = await axios.post(`/homework/add/`, homework, config);

    dispatch({
      type: ADD_HOMEWORK_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADD_HOMEWORK_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteHomework = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_HOMEWORK_REQUEST });

    const { data } = await axios.delete(`/homework/${id}/delete`);

    dispatch({
      type: DELETE_HOMEWORK_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_HOMEWORK_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateHomework = (homework, id) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_HOMEWORK_REQUEST });
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const { data } = await axios.put(
      `/homework/${id}/update/`,
      homework,
      config
    );

    dispatch({
      type: UPDATE_HOMEWORK_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_HOMEWORK_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const generateHomework =
  ({ presentation_name, current_slide }) =>
  async (dispatch) => {
    try {
      dispatch({ type: GENERATE_HOMEWORK_REQUEST });
      const { data } = await axios.get(
        `/homework/generate/?presentation_name=${presentation_name}&current_slide=${current_slide}`
      );

      dispatch({
        type: GENERATE_HOMEWORK_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GENERATE_HOMEWORK_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

  export const sendHomework = (homework) => async (dispatch) => {
    try {
      dispatch({ type: SEND_HOMEWORK_REQUEST });
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(`/homework/send/`, homework, config);
  
      dispatch({
        type: SEND_HOMEWORK_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: SEND_HOMEWORK_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

