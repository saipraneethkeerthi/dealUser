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


interface User {
    email: string;

}

const initialValue = {
    /*  email: "abc@123.com",
     password: "test@1234", */
    email: "",

};
const ForgotPassword = () => {
    const onSubmit = (user: User) => {

    };
    return (
        <div>
            <div className='form_heading'>
                
                    Forgot Password
               
               
            </div>
            <p className='info_para'>Enter email to recover password</p>
            <Formik
                initialValues={initialValue}
                onSubmit={onSubmit}

            >
                <Form>

                    <div className='email_part'>
                        
                        <InputField type="email" name="email" label="Email" placeholder="Enter" />
                    </div>
                    <div className='password_part'>


                    <ButtonComponent type="primary"
              htmlType="submit"
              className="auth-form__btn"
              size="wide"

              > Proceed </ButtonComponent>
                    </div>

                </Form>
            </Formik>
        </div>
    )
}

export default ForgotPassword;