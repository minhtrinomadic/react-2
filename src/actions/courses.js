
import {
    GET_COURSES_REQUEST,
    GET_COURSES_SUCCESS,
    GET_COURSES_FAILURE,
} from '../constants/courses';


import coursesAPI from 'src/services/coursesAPI';


export function getCoursesByCategogy(categogy) {
    return async (dispatch) => {
        dispatch({ type: GET_COURSES_REQUEST });
        try {
            const data  = await coursesAPI.getCoursesByCategory(categogy);
          
            dispatch({ type: GET_COURSES_SUCCESS, payload: { data } })
        } catch (error) {
            dispatch({
                type: GET_COURSES_FAILURE,
                payload: {error},
            });
        }
    }
}