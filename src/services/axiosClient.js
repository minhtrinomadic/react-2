import axios from 'axios';
import qs from 'qs'

const axiosClient = axios.create({
    baseURL: "https://elearning0706.cybersoft.edu.vn/api",
    //Tự cấu hình cách lấy params mặc định của axios 
    // Bỏ qua giá trị null và undefiend trong params
    paramsSerializer:(params)=> qs.stringify(params,{ skipNulls: true}),
});

axiosClient.interceptors.request.use(
    (config) => {
        // Xử lý trước khi được gủi lên sever 
        //Thêm authorization vào header 
        const userInfo = localStorage.getItem("userInfo");
        if (userInfo) {
            const {accessToken} = JSON.parse(userInfo);
            config.headers.Authorization = `Bearer ${accessToken}`
        }

        return config 
    },
    (error) => {
        // Xử lý khi request bị lỗi
        return Promise.reject(error);
    }
    
)

export default axiosClient;