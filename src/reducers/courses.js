import { GET_COURSES_FAILURE, GET_COURSES_REQUEST, GET_COURSES_SUCCESS } from "../constants/courses";

// Courses reducer
const initialState = {
    courses: [],
    isLoading: false,
    error: null,
};

function coursesReducer(state = initialState,action) {
    switch (action.type) {
        case GET_COURSES_REQUEST: {
            return {...state, isLoading: true, error: null };
        }
        case GET_COURSES_SUCCESS: {
            return{...state,courses:action.payload.data, isLoading : false};
        }
        case GET_COURSES_FAILURE: {
            return{...state, isLoading: false, error: action.payload.error };
        }
        default:
            return state;
    }
}
export default coursesReducer