import { Modal } from "antd";
import React, { FC } from "react";
import ButtonComponent from "../ButtonComponent";
import IconComponent from "../IconComponent";
import "./modalComponent.scss";

interface ModalComponentProps {
  visible: boolean;
  title?: string;
  type: "alert" | "alert-large" | "small" | "large" | "no-controllers" | "details";
  alert?: {
    title: string;
    description?: string;
    buttonType?: "affirmative" | "negative"
  };
  successProps?: {
    title: string;
    clickHandler?: () => void;
    loading?: boolean;
  };
  cancelProps?: {
    title: string;
    clickHandler: () => void;
  };
  closeHandler: () => void;
  className?: string;
}

const ModalComponent: FC<ModalComponentProps> = (props) => {
  const {
    title,
    type,
    successProps,
    cancelProps,
    children,
    visible,
    closeHandler,
    alert,
    className
  } = props;

  return (
    <Modal
      className={`modal-component ${type} ${className}`}
      visible={visible}
      footer={null}
      closeIcon={<IconComponent name="icon-close" />}
      onCancel={closeHandler}
      centered
    >
      {type == "no-controllers" ? (
        <div className="no-controllers-modal-component-title">{title}</div>
      ) : (type == "alert" || type == "alert-large") && alert ? (
        <div className="alert-modal-component-title">
          <h3>{alert?.title}</h3>
          <p>{alert?.description}</p>
        </div>
      ) : title ? (
        <div className="modal-component-title">{title}</div>
      ) : ""}
      {children}
      {type !== "no-controllers" && type !== "details" && (
        <div className="modal-component-controllers">
          <ButtonComponent
            type="default"
            additionalTypes="secondary"
            size="fixed"
            onClick={cancelProps?.clickHandler}
          >
            {cancelProps?.title}
          </ButtonComponent>
          <ButtonComponent
            type={"primary"}
            htmlType={"submit"}
            size="fixed"
            {...(alert ? { additionalTypes: alert?.buttonType ?? "negative" } : {})}
            onClick={successProps?.clickHandler}
            loading={successProps?.loading}
          >
            {successProps?.title}
          </ButtonComponent>
        </div>
      )}
    </Modal>
  );
};

export default ModalComponent;
