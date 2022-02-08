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

export const addPresentationReducer = (
  state = { presentation: {} },
  action
) => {
  switch (action.type) {
    case ADD_PRESENTATION_REQUEST:
      return { loading: true, presentation: {} };

    case ADD_PRESENTATION_SUCCESS:
      return { loading: false, presentation: action.payload };

    case ADD_PRESENTATION_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const deletePresentationReducer = (
  state = { presentation: {} },
  action
) => {
  switch (action.type) {
    case DELETE_PRESENTATION_REQUEST:
      return { loading: true, presentation: {} };

    case DELETE_PRESENTATION_SUCCESS:
      return { loading: false, presentation: action.payload };

    case DELETE_PRESENTATION_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const updatePresentationReducer = (
  state = { presentation: {} },
  action
) => {
  switch (action.type) {
    case UPDATE_PRESENTATION_REQUEST:
      return { loading: true, presentation: {} };

    case UPDATE_PRESENTATION_SUCCESS:
      return { loading: false, presentation: action.payload };

    case UPDATE_PRESENTATION_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
