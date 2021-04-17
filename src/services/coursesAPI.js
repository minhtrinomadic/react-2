import axiosClient from './axiosClient'

const coursesAPI = {
    getCourses: () => {
        return axiosClient.get("/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01");
    },
    getCoursesByCategory : (category) => {
        const params = {
            maDanhMuc: category,
            maNhom:"GP01",
        };
        return axiosClient.get("/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc",{params})
    }
};

export default coursesAPI;

// Cách xài 
// import coursesAPI from "src/services/coursesAPI"
// const {data} = await coursesAPI.getCourses()