import {
    GET_STUDENTS_REQUEST,
    GET_STUDENTS_SUCCESS,
    GET_STUDENTS_FAIL,
    GET_PRESENTATIONS_REQUEST,
    GET_PRESENTATIONS_SUCCESS,
    GET_PRESENTATIONS_FAIL,
    GET_PROGRESS_REQUEST,
    GET_PROGRESS_SUCCESS,
    GET_PROGRESS_FAIL,
} from "../constants/homeworkConstants";

import axios from "axios";

export const listStudents = () => async (dispatch) => {
    try {
        dispatch({ type: GET_STUDENTS_REQUEST });

        const { data } = await axios.get(`/students`);

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

export const listPresentations = () => async (dispatch) => {
    try {
        dispatch({ type: GET_PRESENTATIONS_REQUEST });

        const { data } = await axios.get(`/presentations`);

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
