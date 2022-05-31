import React from "react";
import { Formik, Form } from "formik";
import InputField from "../../../shared/components/InputField";
import { Link } from "react-router-dom";

import { Button } from "antd";
import UserService from "../../../services/AuthService/auth.service";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../../../routes/routeConstants/appRoutes";
import { AuthContext } from "../../../context/AuthContext";
import { DownloadOutlined } from '@ant-design/icons';
import ButtonComponent from "../../../shared/components/ButtonComponent";
import IconComponent from "../../../shared/components/IconComponent";


interface User {
    email: string;
    password: string;
    firstname: string;
    lastname: string;
    mobileno: string;
}

const initialValue = {
    /*  email: "abc@123.com",
     password: "test@1234", */
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    mobileno: "",
};



const RegisterForm = () => {
    const { error, loading, loginUser } = UserService();


    const onSubmit = (user: User) => {
        loginUser(user);
    };
    return (
        <div>
            <div className='form_heading create_heading'>
                Create New Vendor Account
            </div>
            <Formik
                initialValues={initialValue}
                onSubmit={onSubmit}

            >
                <Form>
                    <div className='firstname'>
                        
                        <InputField type="text" label='First Name' name="firstname" placeholder="Enter" />
                    </div>
                    <div className='lastname'>
                       
                        <InputField type="text" label='Last Name' name="lastname" placeholder="Enter" />
                        <p className='para_info'><IconComponent name='icon-info'/>  Enter full last name as stated in your National ID</p>
                    </div>
                    <div className='email_part'>
                        
                        <InputField type="email" label='Email' name="email" placeholder="Enter" />
                    </div>
                    <div className='mobile'>
                        
                        <InputField prefix='+20' type="text" name="mobileno" label='Mobile Number' placeholder="Enter" />
                    </div>
                    <div className='password_part'>
                        
                        <InputField
                            type="password"
                            name="password"
                            placeholder="Enter"
                            label='Set Password'
                        />
                    </div>
                    <div className='login_button'>
                    <ButtonComponent type="primary"
              htmlType="submit"
              className="auth-form__btn"
              size="wide"

              > Verify Email & Mobile </ButtonComponent>
                    </div>

                    <div className='have_account'>
                        <p>Already have an account ? <Link to="/auth/login">Login Here</Link> </p>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}

export default RegisterForm;