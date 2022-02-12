import {
  GET_PRESENTATIONS_REQUEST,
  GET_PRESENTATIONS_SUCCESS,
  GET_PRESENTATIONS_FAIL,
  ADD_PRESENTATION_REQUEST,
  ADD_PRESENTATION_SUCCESS,
  ADD_PRESENTATION_FAIL,
  DELETE_PRESENTATION_REQUEST,
  DELETE_PRESENTATION_SUCCESS,
  DELETE_PRESENTATION_FAIL,
  UPDATE_PRESENTATION_REQUEST,
  UPDATE_PRESENTATION_SUCCESS,
  UPDATE_PRESENTATION_FAIL,
} from "../../constants/presentationConstants";

import axios from "axios";

export const listPresentations = (keyword= "") => async (dispatch) => {
  try {
    dispatch({ type: GET_PRESENTATIONS_REQUEST });

    const { data } = await axios.get(`/presentations${keyword}`);

    dispatch({
      type: GET_PRESENTATIONS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_PRESENTATIONS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const addPresentation = (info) => async (dispatch) => {
  try {
    dispatch({ type: ADD_PRESENTATION_REQUEST });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const { data } = await axios.post(`/presentations/add/`, info, config);

    dispatch({
      type: ADD_PRESENTATION_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADD_PRESENTATION_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deletePresentation = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_PRESENTATION_REQUEST });

    const { data } = await axios.delete(`/presentations/${id}/delete`);

    dispatch({
      type: DELETE_PRESENTATION_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_PRESENTATION_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updatePresentation = (info, id) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PRESENTATION_REQUEST });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const { data } = await axios.put(
      `/presentations/${id}/update/`,
      info,
      config
    );

    dispatch({
      type: UPDATE_PRESENTATION_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_PRESENTATION_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
