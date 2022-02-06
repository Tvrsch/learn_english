import {
    GET_PRESENTATIONS_REQUEST,
    GET_PRESENTATIONS_SUCCESS,
    GET_PRESENTATIONS_FAIL,
} from "../../constants/homeworkConstants";

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

