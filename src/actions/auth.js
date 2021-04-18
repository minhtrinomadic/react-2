import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE} from '../constants/auth'
import authAPI from 'src/services/authAPI'

export function login(values) {
    return async (dispatch) => {
        dispatch({ type: LOGIN_REQUEST });
    try {
        const {data} = await authAPI.login(values);

        //Lưu thông tin user xuống localStorage để giữ trạng thái đăng nhập
        localStorage.setItem("userInfo", JSON.stringify(data));
        console.log("ab")
        dispatch({type: LOGIN_SUCCESS, payload: {data} });
    } catch (error) {
console.log(error)
        dispatch({
            type: LOGIN_FAILURE,
            payload: {error}
        })
    }
} 
}
