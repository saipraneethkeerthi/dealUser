import React, { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import RegisterForm from "../../views/Auth/RegisterForm";
import LoginForm from "../../views/Auth/LoginForm";
import { RouterProps } from "../../shared/types/route.type";
import { Row, Col } from 'antd';


import { AppRoutes, NavigationRoutes } from "../../routes/routeConstants/appRoutes";
import landingImage from '../../assets/vendor_login_illustration.png';
import logo from '../../assets/black_logo___no_background.png';
import ForgotPassword from "./ForgotPassword";
import OnBoarding from "./OnBoarding";
import PasswordResetLink from "./PasswordResetLink";
import NewPassword from "./NewPassword";
import AccountVerify from "./AccountVerify";
const authRouter = () => {
  const routes: RouterProps[] = [
    { path: AppRoutes.REGISTER, component: <RegisterForm /> },
    { path: AppRoutes.FORGOT, component: <ForgotPassword /> },
    { path: AppRoutes.LOGIN, component: <LoginForm /> },
    { path: AppRoutes.ONBOARD, component: <OnBoarding /> },
    { path: AppRoutes.PASSWORDRESETLINK, component: <PasswordResetLink /> },
    { path:AppRoutes.NEWPASSWORD,component:<NewPassword/>},
    { path:AppRoutes.VERIFYACCOUNT,component:<AccountVerify/>}
  ];

  return (
    <div>
      <Row>
        <Col xs={24} xl={12} sm={12} ><img
          className='landing_image'
          src={landingImage}
        /></Col>
        <Col xs={24} xl={12} sm={12}>
          <div className='auth_main_content'>
            <div className='logo_style'>
          <img  src={logo} width='100px'/>
          </div>
          <div>
          <Routes>
          {routes.map(({ component, ...routerProps }) => (
            <Route {...routerProps} element={component} />
          ))}
          <Route path="*" element={<Navigate to={NavigationRoutes.LOGIN} />} />
        </Routes>
        </div> </div></Col>
      </Row>


    </div>
  );
};

export default authRouter;
