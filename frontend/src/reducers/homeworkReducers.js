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

export const studentListReducer = (state = { students: [] }, action) => {
    switch (action.type) {
        case GET_STUDENTS_REQUEST:
            return { loading: true, students: [] };

        case GET_STUDENTS_SUCCESS:
            return { loading: false, students: action.payload };

        case GET_STUDENTS_FAIL:
            return { loading: false, error: action.payload };

        default:
            return state;
    }
};

export const presentationListReducer = (
    state = { presentations: [] },
    action
) => {
    switch (action.type) {
        case GET_PRESENTATIONS_REQUEST:
            return { loading: true, presentations: [] };

        case GET_PRESENTATIONS_SUCCESS:
            return { loading: false, presentations: action.payload };

        case GET_PRESENTATIONS_FAIL:
            return { loading: false, error: action.payload };

        default:
            return state;
    }
};

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
