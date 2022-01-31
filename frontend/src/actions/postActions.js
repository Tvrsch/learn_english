import {
    POST_LIST_REQUEST,
    POST_LIST_SUCCESS,
    POST_LIST_FAIL,
} from "../constants/postConstants";

import posts from "../posts";

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export const listPosts =
    (keyword = "") =>
    async (dispatch) => {
        try {
            dispatch({ type: POST_LIST_REQUEST });
            await sleep(1000);
            dispatch({
                type: POST_LIST_SUCCESS,
                payload: posts,
            });
        } catch (error) {
            dispatch({
                type: POST_LIST_FAIL,
                payload:
                    error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
            });
        }
    };
