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
import UnderVerificationImg from "../../../assets/under_verification.png";


interface User {
    email: string;

}

const initialValue = {
    /*  email: "abc@123.com",
     password: "test@1234", */
    email: "",

};
const AccountVerify = () => {
    const onSubmit = (user: User) => {

    };
    return (
        <div>
           <p className="all_set">All Set!</p>
            <div className='form_heading'>
            
                Your Account is created and being verified


            </div>
            
            <Formik
                initialValues={initialValue}
                onSubmit={onSubmit}

            >
                <Form>
                    <div className="password_reset_link_div">
                        <img src={UnderVerificationImg} className="verify_account_img" />
                    </div>
                    <div className="reset_info">
                        <p>You will receive a  mail once verified. Stay tuned!</p>
                    </div>

                    <ButtonComponent type="primary"
                        htmlType="submit"
                        className="auth-form__btn"
                        size="wide"

                    > Close </ButtonComponent>


                </Form>
            </Formik>
        </div>
    )
}

export default AccountVerify;