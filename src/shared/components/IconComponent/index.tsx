import React, { FC } from "react";
import "./iconComponent.scss";

interface IconComponentProps {
  name:
    | "icon-customers"
    | "icon-info"
    | "icon-search"
    | "icon-vendors"
    | "icon-purchases"
    | "icon-payments"
    | "icon-user-profile"
    | "icon-edit"
    | "icon-close"
    | "icon-back"
    | "icon-bell"
    | "icon-ellipsis"
    | "icon-email"
    | "icon-phone"
    | "icon-document"
    | "icon-upload"
    | "icon-filter"
    | "icon-camera"
    | "icon-trash"
    | "icon-blacklist"
    | "icon-star"
    | "icon-map"
    | "icon-down"
    | "icon-calender"
    | "icon-user-config"
    | "icon-setting"
    | "icon-dashboard"
    | "icon-settlements"
    | "icon-password"
    | "icon-logout"
    ;
  onClick?: () => void;
}

const IconComponent: FC<IconComponentProps> = (props) => {
  const { name, onClick } = props;
  const renderIcon = () => {
    switch (name) {
      case "icon-dashboard": {
        return (
          <i className="icon-dashboard">
            <span className="path1"></span>
            <span className="path2"></span>
            <span className="path3"></span>
            <span className="path4"></span>
            <span className="path5"></span>
            <span className="path6"></span>
            <span className="path7"></span>
            <span className="path8"></span>
          </i>
        );
      }
      case "icon-customers": {
        return (
          <i className="icon-customers">
            <span className="path1" />
            <span className="path2" />
            <span className="path3" />
          </i>
        );
      }
      case "icon-password": {
        return (
          <i className="icon-change-password">
            <span className="path1" />
            <span className="path2" />
            <span className="path3" />
          </i>
        );
      }
      case "icon-info": {
        return (
          <i className="icon-info">
            <span className="path1"></span>
            <span className="path2"></span>
            <span className="path3"></span>
            <span className="path4"></span>
          </i>
        );
      }
      case "icon-search": {
        return (
          <i className="icon-search">
            <span className="path1"></span>
            <span className="path2"></span>
          </i>
        );
      }
      case "icon-settlements": {
        return (
          <i className="icon-settlement">
            <span className="path1"></span>
            <span className="path2"></span>
          </i>
        );
      }
      case "icon-vendors": {
        return (
          <i className="icon-vendor">
            <span className="path1"></span>
            <span className="path2"></span>
          </i>
        );
      }
      case "icon-purchases": {
        return (
          <i className="icon-purchase">
            <span className="path1"></span>
            <span className="path2"></span>
          </i>
        );
      }
      case "icon-payments": {
        return (
          <i className="icon-payment">
            <span className="path1"></span>
            <span className="path2"></span>
            <span className="path3"></span>
            <span className="path4"></span>
          </i>
        );
      }
      case "icon-user-profile": {
        return (
          <i className="icon-user-profile">
            <span className="path1"></span>
            <span className="path2"></span>
          </i>
        );
      }
      case "icon-calender": {
        return (
          <i className="icon-calender">
            <span className="path1"></span>
            <span className="path2"></span>
          </i>
        );
      }
      case "icon-edit": {
        return (
          <i className="icon-edit">
            <span className="path1"></span>
            <span className="path2"></span>
          </i>
        );
      }
      case "icon-filter": {
        return (
          <i className="icon-filter">
            <span className="path1"></span>
            <span className="path2"></span>
          </i>
        );
      }
      case "icon-close": {
        return <i className="icon-close"></i>;
      }
      case "icon-bell": {
        return (
          <i className="icon-bell">
            <span className="path1"></span>
            <span className="path2"></span>
          </i>
        );
      }
      case "icon-back": {
        return <i className="icon-back"></i>;
      }
      case "icon-logout": {
        return <i className="icon-logout"></i>;
      }
      case "icon-down": {
        return <i className="icon-dropdown-arrow"></i>;
      }
      case "icon-ellipsis": {
        return <i className="icon-more"></i>;
      }
      case "icon-upload": {
        return <i className="icon-upload"></i>;
      }
      case "icon-email": {
        return (
          <i className="icon-email">
            <span className="path1"></span>
            <span className="path2"></span>
          </i>
        );
      }
      case "icon-phone": {
        return (
          <i className="icon-phone">
            <span className="path1"></span>
            <span className="path2"></span>
          </i>
        );
      }
      case "icon-document": {
        return (
          <i className="icon-document">
            <span className="path1"></span>
            <span className="path2"></span>
          </i>
        );
      }
      case "icon-camera": {
        return (
          <i className="icon-camera">
            <span className="path1"></span>
            <span className="path2"></span>
            <span className="path3"></span>
          </i>
        );
      }
      case "icon-map": {
        return (
          <i className="icon-map">
            <span className="path1"></span>
            <span className="path2"></span>
            <span className="path3"></span>
          </i>
        );
      }
      case "icon-trash": {
        return (
          <i className="icon-trash">
            <span className="path1"></span>
            <span className="path2"></span>
            <span className="path3"></span>
            <span className="path4"></span>
          </i>
        );
      }
      case "icon-blacklist": {
        return (
          <i className="icon-blacklist">
            <span className="path1"></span>
            <span className="path2"></span>
          </i>
        );
      }
      case "icon-star": {
        return (
          <i className="icon-star">
            <span className="path1"></span>
            <span className="path2"></span>
          </i>
        );
      }
      case "icon-user-config": {
        return (
          <i className="icon-user-config">
            <span className="path1" />
            <span className="path2" />
            <span className="path3" />
          </i>
        );
      }
      case "icon-setting": {
        return (
          <i className="icon-setting">
            <span className="path1" />
            <span className="path2" />
            <span className="path3" />
          </i>
        );
      }
      default: {
        return <i></i>;
      }
    }
  };
  return (
    <span className="icon-component" onClick={onClick}>
      {renderIcon()}
    </span>
  );
};

export default IconComponent;
