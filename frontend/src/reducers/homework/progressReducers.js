import {
    GET_PROGRESS_REQUEST,
    GET_PROGRESS_SUCCESS,
    GET_PROGRESS_FAIL,
    ADD_PROGRESS_REQUEST,
    ADD_PROGRESS_SUCCESS,
    ADD_PROGRESS_FAIL,
} from "../../constants/homeworkConstants";

export const progressListReducer = (state = { progress: [] }, action) => {
    switch (action.type) {
        case GET_PROGRESS_REQUEST:
            return { loading: true, progress: [] };

        case GET_PROGRESS_SUCCESS:
            return { loading: false, progress: action.payload };

        case GET_PROGRESS_FAIL:
            return { loading: false, error: action.payload };

        default:
            return state;
    }
};

export const addProgressReducer = (state = { }, action) => {
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