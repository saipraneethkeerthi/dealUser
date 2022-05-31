import { Form, Formik, FormikValues } from "formik";
import React, { FC, useState } from "react";
import InputField from "../../../InputField";
import ModalComponent from "../../../ModalComponent";
import "./passwordChangeForm.scss";

interface PasswordChangeFormProps {
  visible: boolean;
  closeHandler: () => void;
}

const PasswordChangeForm: FC<PasswordChangeFormProps> = (props) => {
  const { visible, closeHandler } = props;
  const [initialValues, setInitialValues] = useState<any>(null);
  const onSubmit = (values: FormikValues) => {};
  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize
      onSubmit={onSubmit}
    >
      {({}) => (
        <ModalComponent
          type="small"
          visible={visible}
          closeHandler={closeHandler}
          successProps={{
            title: "Update",
            clickHandler: closeHandler,
          }}
          cancelProps={{
            title: "Discard",
            clickHandler: closeHandler,
          }}
          title={"Change Password"}
        >
          <div className="profile-edit-form">
            <Form>
              <InputField
                name="password"
                label="New Password"
                placeholder="Enter"
              />
              <InputField
                name="confirmPassword"
                label="Confirm Password"
                placeholder="Enter"
              />
            </Form>
          </div>
        </ModalComponent>
      )}
    </Formik>
  );
};

export default PasswordChangeForm;
