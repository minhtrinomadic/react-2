import { combineReducers } from 'redux'
import coursesReducer from './courses'

const rootReducer = combineReducers({
    // Nơi khai báo các reducer con
    coursesReducer,
});

export default rootReducer;