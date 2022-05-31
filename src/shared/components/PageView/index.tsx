import { Badge, Col, Row } from "antd";
import React, { FC, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import IconComponent from "../IconComponent";
import Notifications from "./Notifications";
import "./pageView.scss";
import ProfileDetails from "./ProfileDetails";

interface PageViewProps {
  title?: {
    icon?: ReactNode;
    name: string;
    span?: string
  };
  type?: "default" | "back-only" | "back";
}

const PageView: FC<PageViewProps> = (props) => {
  const { title, type = "default", children } = props;
  const navigate = useNavigate();

  return (
    <div className="page-view">
      <div className="page-view__header">
        <Row className="page-view-header-title__container">
          <Col span={18}>
            <h2>
              {(type == "back" || type == "back-only") && (
                <span className="back-icon" onClick={() => navigate(-1)}>
                  <IconComponent name="icon-back" />
                </span>
              )}
              {title?.icon} {title?.name} <span className="title-span">{title?.span}</span>
            </h2>
          </Col>
          <Col span={6}>
            {type !== "back-only" && (
              <div className="page-view-header-title__right">
                <Notifications/>
                <ProfileDetails />
              </div>
            )}
          </Col>
        </Row>
      </div>
      <div className="page-view-content">{children}</div>
    </div>
  );
};

export default PageView;
