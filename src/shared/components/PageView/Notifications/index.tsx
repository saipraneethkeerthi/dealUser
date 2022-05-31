import { Badge, Divider, Dropdown } from "antd";
import React, { FC, Fragment, useState } from "react";
import IconComponent from "../../IconComponent";
import "./notifications.scss";
import faker from "faker";
import NotificationsReadIcon from "../../../../assets/images/notifications.svg";
import NotificationsUnreadIcon from "../../../../assets/images/notifications.svg";

interface NotificationsProps {}

const Notifications: FC<NotificationsProps> = (props) => {
  const {} = props;
  const [notifications, setNotifications] = useState([
    {
      date: faker.date.past().toDateString(),
      read: true,
      title: "Giza Store is deleted by Puma",
    },
    {
      date: faker.date.past().toDateString(),
      read: true,
      title: "Giza Store is deleted by Puma",
    },
    {
      date: faker.date.past().toDateString(),
      read: false,
      title: "Giza Store is deleted by Puma",
    },
    {
      date: faker.date.past().toDateString(),
      read: false,
      title: "Giza Store is deleted by Puma",
    },
    {
      date: faker.date.past().toDateString(),
      read: false,
      title: "Giza Store is deleted by Puma",
    },
    {
      date: faker.date.past().toDateString(),
      read: false,
      title: "Giza Store is deleted by Puma",
    },
  ]);
  const notificationsList = (
    <div className="notifications-list">
      {notifications?.map((value, index) => {
        return (
          <Fragment>
            <div
              className={`notification-item ${value?.read ? "read" : "unread"}`}
            >
              <div className="notification-icon">
                <img
                  src={
                    value?.read
                      ? NotificationsReadIcon
                      : NotificationsUnreadIcon
                  }
                />
              </div>
              <div className="notification-details">
                <div className="title">{value?.title}</div>
                <div className="date">{value?.date}</div>
              </div>
            </div>
            <Divider />
          </Fragment>
        );
      })}
    </div>
  );
  return (
    <Dropdown
      className="notifications"
      trigger={["click"]}
      overlay={notificationsList}
    >
      <Badge className="notification-badge">
        <IconComponent name="icon-bell" />
      </Badge>
    </Dropdown>
  );
};

export default Notifications;
