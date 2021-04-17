import React from 'react'
import { useEffect } from 'react';
import {useParams} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import {getCoursesByCategogy} from '../../actions/courses'

export default function Courses() {
    const dispatch = useDispatch();
    const {categogy} = useParams();
    const {courses, isLoading, error} = useSelector((state) => state.coursesReducer);
    console.log(courses);

    //Được chạy mỗi khi param categogy thay đổi , để gọi lại API mới tương ứng vs categogy mới 
    useEffect(() => {
        //dispactch action gọi API lấy DSKH
        dispatch(getCoursesByCategogy(categogy));
    },[categogy])

    return (
        <div>
            <h1>Courses List By Categogy</h1>
        </div>
    )
}

