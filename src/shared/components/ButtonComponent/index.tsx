import { Button } from "antd";
import { ButtonType } from "antd/lib/button";
import { ButtonHTMLType } from "antd/lib/button/button";
import { SizeType } from "antd/lib/config-provider/SizeContext";
import React, { FC } from "react";
import "./buttonComponent.scss";

interface ButtonComponentProps {
  className?: string;
  type?: ButtonType;
  additionalTypes?: "secondary" | "affirmative" | "negative";
  size: "large" | "medium" | "fixed" | "fixed-v2" | "wide" | "small" | "icon-only";
  htmlType?: ButtonHTMLType;
  onClick?: () => void;
  icon?: any;
  disabled?: boolean;
  loading?: boolean;
}

const ButtonComponent: FC<ButtonComponentProps> = (props) => {
  const { className, type = "default", children, htmlType = "button", onClick, size, icon, additionalTypes, ...rest } = props;

  return (
    <div className={`button-component ${size} ${className} ${additionalTypes}`}>
      <Button type={type} htmlType={htmlType} onClick={onClick} shape={(!children && icon) ?  "circle" : undefined} icon={icon} {...rest}>{children}</Button>
    </div>
  );
};

export default ButtonComponent;
