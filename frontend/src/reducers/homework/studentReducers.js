import {
    GET_STUDENTS_REQUEST,
    GET_STUDENTS_SUCCESS,
    GET_STUDENTS_FAIL,
} from "../../constants/homeworkConstants";

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
