import { Form, Formik } from "formik";
import React, { FC, useState } from "react";
import InputField from "../../../InputField";
import ModalComponent from "../../../ModalComponent";
import "./profileEditForm.scss";

interface ProfileEditFormProps {
  visible: boolean;
  closeHandler: () => void;
}

const ProfileEditForm: FC<ProfileEditFormProps> = (props) => {
  const { visible, closeHandler } = props;
  const [initialValues, setInitialValues] = useState<any>(null);
  const onSubmit = () => {};
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
          title={"Edit Profile"}
        >
          <div className="profile-edit-form">
            <Form>
              <InputField
                name="firstName"
                label="First Name"
                placeholder="Enter"
              />
              <InputField
                name="lastName"
                label="Last Name"
                placeholder="Enter"
              />
              <InputField name="email" label="Email" placeholder="Enter" />
              <InputField name="phoneNumber" label="Phone Number" placeholder="Enter"/>
            </Form>
          </div>
        </ModalComponent>
      )}
    </Formik>
  );
};

export default ProfileEditForm;
