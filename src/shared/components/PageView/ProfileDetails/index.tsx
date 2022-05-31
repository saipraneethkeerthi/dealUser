import { Divider, Dropdown } from "antd";
import React, { FC, Fragment, useEffect, useState } from "react";
import IconComponent from "../../IconComponent";
import "./profileDetails.scss";
import faker from "faker";
import ModalComponent from "../../ModalComponent";
import ProfileEditForm from "./ProfileEditForm";
import PasswordChangeForm from "./PasswordChangeForm";
import { AuthContext } from "../../../../context/AuthContext";
import UserService from "../../../../services/AuthService/auth.service";

interface ProfileDetailsProps {}

const ProfileDetails: FC<ProfileDetailsProps> = (props) => {
  const {} = props;
  const [showProfileEditForm, setProfileEditFormVisibility] = useState(false);
  const [showPasswordChangeForm, setPasswordChangeFormVisibility] =
    useState(false);
  // const { logoutUser } = UserService();
  return (
    <Fragment>
      <ProfileEditForm
        visible={showProfileEditForm}
        closeHandler={() =>
          setProfileEditFormVisibility((visibility) => !visibility)
        }
      />
      <PasswordChangeForm
        visible={showPasswordChangeForm}
        closeHandler={() =>
          setPasswordChangeFormVisibility((visibility) => !visibility)
        }
      />
      <Dropdown
        className="profile-details"
        trigger={["click"]}
        overlay={
          <div className="profile-details__overlay">
            <div className="profile-details-name__container">
              <p className="name">Admin</p>
              <p className="role">Admin</p>
            </div>
            <div className="profile-details-contact__container">
              <p className="phone">
                <IconComponent name="icon-phone" />
                {faker.phone.phoneNumber()}
              </p>
              <p className="email">
                <IconComponent name="icon-email" />
                {faker.internet.exampleEmail()}
              </p>
            </div>
            <Divider />
            <div className="profile-details-options__container">
              <div
                className="edit-profile"
                onClick={() => setProfileEditFormVisibility(true)}
              >
                <IconComponent name="icon-edit" />
                Edit Profile
              </div>
              <div
                className="change-password"
                onClick={() => setPasswordChangeFormVisibility(true)}
              >
                <IconComponent name="icon-password" />
                Change Password
              </div>
              <div
                className="logout"
                // onClick={(e) => {
                //     logoutUser()
                //     e.stopPropagation()
                // }}
              >
                <IconComponent name="icon-logout" />
                Logout
              </div>
            </div>
          </div>
        }
      >
        <div>
          <IconComponent name="icon-user-profile" />
        </div>
      </Dropdown>
    </Fragment>
  );
};

export default ProfileDetails;
