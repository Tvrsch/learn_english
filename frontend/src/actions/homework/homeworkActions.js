// import {
//     GET_PROGRESS_REQUEST,
//     GET_PROGRESS_SUCCESS,
//     GET_PROGRESS_FAIL,

// } from "../../constants/homeworkConstants";

// import axios from "axios";

// export const listStudents = () => async (dispatch) => {
//     try {
//         dispatch({ type: GET_STUDENTS_REQUEST });

//         const { data } = await axios.get(`/students`);

//         dispatch({
//             type: GET_STUDENTS_SUCCESS,
//             payload: data,
//         });
//     } catch (error) {
//         dispatch({
//             type: GET_STUDENTS_FAIL,
//             payload:
//                 error.response && error.response.data.message
//                     ? error.response.data.message
//                     : error.message,
//         });
//     }
// };