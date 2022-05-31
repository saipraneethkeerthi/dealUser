import React from "react";
import { Menu } from "antd";
import "./navbar.scss";
// import Notification from "../Notification";
import { NotificationTypes } from "../../../enums/notificationTypes";
import AppIcon from "../../../assets/images/app-logo-white.svg";
import {
  AppRoutes,
} from "../../../routes/routeConstants/appRoutes";
import { useLocation, useNavigate } from "react-router-dom";
import IconComponent from "../IconComponent";

const Navbar = (props: any) => {
  const handleClick = () => {};
  const navigate = useNavigate();
  const location = useLocation();
  const navbarItems = [
    {
      title: "Dashboard",
      key: "dashboard",
      // path: AppRoutes.DASHBOARD,
      icon: <IconComponent name="icon-dashboard" />,
    },
    {
      title: "Customers",
      key: "customers",
      // path: AppRoutes.CUSTOMERS,
      icon: <IconComponent name="icon-customers" />,
    },
    {
      title: "Vendors",
      key: "vendors",
      // path: AppRoutes.VENDORS,
      icon: <IconComponent name="icon-vendors" />,
    },
    {
      title: "Purchases",
      key: "purchases",
      // path: AppRoutes.PURCHASES,
      icon: <IconComponent name="icon-purchases" />,
    },
    {
      title: "Settlements",
      key: "settlements",
      // path: AppRoutes.SETTLEMENTS,
      icon: <IconComponent name="icon-settlements" />,
    },
    {
      title: "Payments",
      key: "payments",
      // path: AppRoutes.PAYMENTS,
      icon: <IconComponent name="icon-payments" />,
    },
    {
      title: "Deall Users",
      key: "deall-users",
      // path: AppRoutes.DEALL_USERS,
      icon: <IconComponent name="icon-user-config" />,
    },
    {
      title: "Configuration",
      key: "configuration",
      // path: AppRoutes.CONFIGURATION,
      icon: <IconComponent name="icon-setting" />,
    },
  ];

  return (
    <div className="navbar__container">
      <img src={AppIcon} className="navbar-app-logo__img" />
      <Menu
        onClick={handleClick}
        className="navbar"
        selectedKeys={[location?.pathname?.split("/")[1]]}
      >
        {navbarItems?.map((value, index) => {
          return (
            <Menu.Item
              className="navbar-item"
              key={value?.key}
              // onClick={() => navigate(value?.path)}
            >
              <div className="navbar-item__title">
                {value?.icon}
                {value?.title}
              </div>
            </Menu.Item>
          );
        })}
      </Menu>
    </div>
  );
};

export default Navbar;
