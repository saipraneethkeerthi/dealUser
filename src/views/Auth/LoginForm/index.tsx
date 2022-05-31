import React from "react";
import { Formik, Form } from "formik";
import InputField from "../../../shared/components/InputField";
import { Link } from "react-router-dom";
import { validationSchema } from "./LoginValidation";
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

const LoginForm = (props: any) => {
  const { error, loading, loginUser } = UserService();


  const onSubmit = (user: User) => {
    loginUser(user);
  };

  return (
    <div>
      <div className='form_heading'>
        Vendor Login
      </div>
      <Formik
        initialValues={initialValue}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form>

          <div className='email_part'>

            <InputField type="email" label='Email' name="email" placeholder="Enter" />
          </div>
          <div className='password_part'>

            <InputField
              label='Password'
              type="password"
              name="password"
              placeholder="Enter"
            />
          </div>
          <div className='login_button'>
            <ButtonComponent type="primary"
              htmlType="submit"
              className="auth-form__btn"
              size="wide"

              loading={loading}> Login </ButtonComponent>


          </div>
          <div className='forgot_password'>
            <p>Forget Password ? <Link to="/auth/forgot-password">Click Here</Link></p>
          </div>
          <div className='have_account'>
            <p>Don't have an account ? <Link to="/auth/register">Create One</Link> </p>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
