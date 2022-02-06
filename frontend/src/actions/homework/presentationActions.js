import {
    GET_PRESENTATIONS_REQUEST,
    GET_PRESENTATIONS_SUCCESS,
    GET_PRESENTATIONS_FAIL,

} from "../../constants/homeworkConstants";

import axios from "axios";

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