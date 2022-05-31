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
import PasswordResetImage from "../../../assets/password_reset_link_sent.png";


interface User {
    email: string;

}

const initialValue = {
    /*  email: "abc@123.com",
     password: "test@1234", */
    email: "",

};
const PasswordResetLink = () => {
    const onSubmit = (user: User) => {

    };
    return (
        <div>
            <div className='form_heading'>

                Password Reset Link Sent


            </div>
            <p className='info_para'>Check your email for the password reset link</p>
            <Formik
                initialValues={initialValue}
                onSubmit={onSubmit}

            >
                <Form>
                    <div className="password_reset_link_div">
                        <img src={PasswordResetImage} className="password-reset-link-img" />
                    </div>

                    <ButtonComponent type="primary"
                        htmlType="submit"
                        className="auth-form__btn"
                        size="wide"

                    > Proceed to Login </ButtonComponent>


                </Form>
            </Formik>
        </div>
    )
}

export default PasswordResetLink;