import React from 'react'
import { useRef } from 'react';
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'
import { Input, FormGroup, Button, Label } from 'reactstrap'
import {useDispatch, useSelector} from 'react-redux'
import  {login} from 'src/actions/auth'
import { useLocation, Redirect } from 'react-router-dom';
import qs from 'qs'
//Controlled component : Control tất cả mọi thứ trên giao diện bằng state , props
//uncontrolled component : control giao diện không thông qua state , props 

//useState lẫn useRef đều dùng để lưu trữ data 
// khác : khi state thay đổi component bị render lại , ref thay đổi component không bị render lại 
export default function LoginPage() {
    // const inpTaiKhoan = useRef();
    // const inpMatkhau = useRef();
    const dispatch = useDispatch();
    const {userInfo, isLoading, error} = useSelector((state)=> state.authReducer);
    const  location = useLocation();


    const schema = yup.object().shape({
        taiKhoan:
         yup.string()
        .required("Tài khoản không được để trống")
        .min(5,"Tài khoản phải từ 5 tới 20 kí tự ")
        .max(20, "Tài Khoản phải từ 5 tới 20 kí tự "),
        matKhau:
        yup.string()
        .required("Mật khẩu không được để trống")
        .min(5,"Mật khẩu phải từ 5 tới 20 kí tự ")
        .max(20, "Mật khẩu phải từ 5 tới 20 kí tự "),
    })

   
    const { register, formState: { errors }, handleSubmit } = useForm({resolver:yupResolver(schema)});

    const handleLogin = (values) => {

        console.log(values)
        dispatch(login(values));

    }

    if (userInfo) {
        const { redirectTo } = qs.parse(location.search, {
            ignoreQueryPrefix:true
        });
        if (redirectTo) {
          
            return <Redirect to={redirectTo}/>
        }
        return <Redirect to="/"/>
    }

    console.log(errors)
    return (
        <form onSubmit={handleSubmit(handleLogin)}>
            <h1>Login</h1>
            <div className="form-group">
                <label>Tài Khoản</label>
                <input type="text" className="form-control" {...register("taiKhoan",
                    // {
                    //     required:
                    //         { value: true, message: "Tài khoản không được để trống " },
                    //     minLength: {
                    //         value: 5,
                    //         message: "Tài khoản phải từ 5 tới 20 kí tự"
                    //     },
                    //     maxLength: {
                    //         value: 20,
                    //         message: "Tài khoản phải từ 5 tới 20 kí tự"
                    //     }
                    // }
                    )} />
            </div>

            {errors.taiKhoan && <div className="alert alert-danger">
                {errors.taiKhoan.message}
            </div>}

            <FormGroup>
                {/* <label>Mật khẩu</label>
                <input type="text" className="form-control" {...register("matKhau",
                {required:true})}/>
            </div>

            {errors.matKhau && <div className="alert alert-danger">
                    Mật khẩu không được để trống 
            </div>
            } */}
            <Label>Mật Khẩu</Label>
            <Input type="text" {...register("matKhau",)}/>
            
            </FormGroup>
            {errors.matKhau && <div className="alert alert-danger">
                 {errors.matKhau.message}
            </div>
            }
            <Button  className="btn btn-success">Đăng Nhập</Button>
        </form>
    )
}
