import React, { FC, useContext, useEffect } from "react";
import {
  Routes,
  Route,
  BrowserRouter,
  Navigate,
} from "react-router-dom";
import { createBrowserHistory } from "history";
import AuthWrapper from "../views/Auth/AuthWrapper";
import isAuthenticated from "../shared/components/HOC/requireAuth";
import Home from "../views/Home";
import { RouterProps } from "../shared/types/route.type";
import AppComponents from "../views/AppComponents";
import { AppRoutes } from "./routeConstants/appRoutes";

export const appHistory = createBrowserHistory();

const AppRouter = () => {
  let routes: RouterProps[] = [
    { path: AppRoutes.AUTH, component: <AuthWrapper /> },
    { path: AppRoutes.HOME, component: (<Home/>) },
  ];
  if (Boolean(process.env.REACT_APP_UNDER_DEVELOPMENT)) {
    routes.push({
      path: AppRoutes.APP_COMPONENTS,
      component: AppComponents,
    });
  }

  return (
    <div>
      <BrowserRouter>
        <Routes>
          {routes?.map((route, index) => {
            return (
              <Route
                key={index}
                path={route?.path}
                element={route?.component}
              />
            );
          })}
          {/* <Route path="*" element={<Navigate to={appRoutes.AUTH} />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
