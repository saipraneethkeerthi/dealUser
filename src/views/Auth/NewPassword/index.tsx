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
  password: string;
}

const initialValue = {
  /*  email: "abc@123.com",
   password: "test@1234", */
  email: "",
  password: "",
};

const NewPassword = (props: any) => {
  const { error, loading, loginUser } = UserService();


  const onSubmit = (user: User) => {
    loginUser(user);
  };

  return (
    <div>
      <div className='form_heading'>
        Reset Password
      </div>
      <Formik
        initialValues={initialValue}
        onSubmit={onSubmit}
        
      >
        <Form>

          <div className='email_part'>

            <InputField type="password" label='New Password' name="new_password" placeholder="Enter" />
          </div>
          <div className='password_part'>

            <InputField
              label='Confirm Password'
              type="password"
              name="confirm_password"
              placeholder="Enter"
            />
          </div>
          <div className='login_button'>
            <ButtonComponent type="primary"
              htmlType="submit"
              className="auth-form__btn"
              size="wide"

              loading={loading}> Update Password </ButtonComponent>


          </div>
         
        </Form>
      </Formik>
    </div>
  );
};

export default NewPassword;
