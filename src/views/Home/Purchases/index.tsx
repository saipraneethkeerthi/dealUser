import React, { FC, useEffect, useState } from "react";
import BadgeComponent from "../../../shared/components/BadgeComponent";
import IconComponent from "../../../shared/components/IconComponent";
import PageView from "../../../shared/components/PageView";
import TableComponent, {
  TableFilterComponent,
  TableFilterDropdownComponent,
} from "../../../shared/components/TableComponent";
import "./purchases.scss";
import faker from "faker";
import { BadgeTypes } from "../../../enums/badgeTypes";
import { generatePath, useNavigate } from "react-router-dom";
import { AppRoutes } from "../../../routes/routeConstants/appRoutes";
// import { currencyString } from "..";
import { Form, Formik, FormikValues } from "formik";
import { Col, Row } from "antd";
import DropdownField from "../../../shared/components/DropdownField";
import InputField from "../../../shared/components/InputField";
import DatePickerField from "../../../shared/components/DatePickerField";
// import { PurchaseService } from "../../../services/PurchaseService/purchase.service";
import NoPurchasesImg from "../../../assets/empty/purchases.svg";
import { tableSorter } from "../../../shared/utils/tableSorter";
import {
  PurchaseListFilterModel,
  PurchaseListModel,
} from "../../../models/Purchase/purchase.model";
import moment from "moment";
import { BadgeTypesDefinition } from "../../../definitions/badgeTypesDefinition";
import { serialize } from "serializr";
// import { removeUndefined } from "../../../shared/utils/removeUndefined";
interface PurchasesProps {}

const Purchases: FC<PurchasesProps> = (props) => {
  const {} = props;
  const navigate = useNavigate();
  const [isFilterShown, setIsFilterShown] = useState(false);
  // const { loading, fetchPurchases, purchases } = PurchaseService();
  const [filters, setFilters] = useState<PurchaseListFilterModel>({});
 const data=[{
   id:"text",
   purchaseId:"texttttt",
   customerName:"neew",
   vendor:"some",
   totalAmount:"33",
   customerPaymentStatus:"ivbib",
   purchaseStatus:"hii"

 }]
  const handleFilterSubmit = (values: PurchaseListFilterModel) => {
    // setFilters((prev) => ({ ...prev, ...removeUndefined(values) }));
    handleFilterClose();
  };

  // useEffect(() => {
  //   const serializedQuery = serialize(PurchaseListFilterModel, filters);
  //   fetchPurchases(serializedQuery);
  // }, [filters]);
  const filterInitialValues = new PurchaseListFilterModel();
  const handleFilterClose = () => {
    setIsFilterShown(false);
  };
  const filter = (
    <TableFilterDropdownComponent
      visibilityHandler={(visible) => setIsFilterShown(visible)}
      visible={isFilterShown}
      count={
        Object.entries(filters)?.filter(
          (value) => value?.[0] !== "search" && value?.[1]
        )?.length
      }
    >
      <Formik initialValues={filterInitialValues} onSubmit={handleFilterSubmit}>
        {({ values, handleSubmit, setFieldValue, resetForm }) => (
          <TableFilterComponent
            applyHandler={handleSubmit}
            clearHandler={() => {
              handleFilterClose();
              setFilters(() => ({ ...filterInitialValues, search: filters?.search }));
              resetForm({});
            }}
          >
            <Form>
              <Row gutter={16}>
                <Col span={12}>
                  <InputField
                    name="customerName"
                    placeholder="Enter"
                    label="Customer Name"
                  />
                </Col>
                <Col span={12}>
                  <InputField
                    name="nationalId"
                    placeholder="Enter"
                    label="National ID"
                  />
                </Col>
                <Col span={12}>
                  <InputField
                    name="vendorName"
                    placeholder="Enter"
                    label="Vendor Name"
                  />
                </Col>
                <Col span={12}>
                  <InputField
                    name="vendorId"
                    placeholder="Enter"
                    label="Vendor ID"
                  />
                </Col>
                <Col span={12}>
                  <DatePickerField
                    name="purchaseDate"
                    placeholder="Enter"
                    label="Purchase Date"
                    value={values?.createdAt}
                    onChange={(date, dateString) => {
                      setFieldValue("createdAt", dateString);
                    }}
                  />
                </Col>
                <Col span={12}></Col>
                <Col span={12}>
                  <DropdownField
                    options={[
                      {
                        value: BadgeTypes.OUTSTANDING,
                        label: BadgeTypesDefinition[BadgeTypes.OUTSTANDING],
                      },
                      {
                        value: BadgeTypes.COMPLETED,
                        label: BadgeTypesDefinition[BadgeTypes.COMPLETED],
                      },
                    ]}
                    label="Customer Payment Status"
                    name="customerPaymentStatus"
                    placeholder="Enter"
                    onChange={(value) =>
                      setFieldValue("customerPaymentStatus", value)
                    }
                    value={values?.customerPaymentStatus}
                  />
                </Col>
                <Col span={12}>
                  <DropdownField
                    label="Purchase Status"
                    options={[
                      {
                        value: BadgeTypes.PURCHASED,
                        label: BadgeTypesDefinition[BadgeTypes.PURCHASED],
                      },
                      {
                        value: BadgeTypes.PARTIAL_RETURN,
                        label: BadgeTypesDefinition[BadgeTypes.PARTIAL_RETURN],
                      },
                      {
                        value: BadgeTypes.RETURNED,
                        label: BadgeTypesDefinition[BadgeTypes.RETURNED],
                      },
                      {
                        value: BadgeTypes.RETURN_CANCELLED,
                        label:
                          BadgeTypesDefinition[BadgeTypes.RETURN_CANCELLED],
                      },
                    ]}
                    name="purchaseStatus"
                    placeholder="Enter"
                    onChange={(value) => setFieldValue("purchaseStatus", value)}
                    value={values?.purchaseStatus}
                  />
                </Col>
              </Row>
            </Form>
          </TableFilterComponent>
        )}
      </Formik>
    </TableFilterDropdownComponent>
  );
  return (
    <PageView
      title={{
        name: "Purchases",
        icon: <IconComponent name="icon-purchases" />,
      }}
    >
      <div className="purchases">
        <TableComponent
          search={{
            placeholder: "Search purchase by id",
            onSearch: (value) => {
              handleFilterSubmit({ search: value });
            },
          }}
          filter={filter}
          // loading={loading}
          columns={[
            {
              title: "Purchase ID",
              dataIndex: "id",
              key: "id",
              sorter: (a, b) => tableSorter("number", a?.id, b?.id),
              render: (text, record) => (
                <span
                  className="cursor-pointer"
                  // onClick={() =>
                  //   navigate(
                  //     generatePath(AppRoutes.PURCHASES_VIEW, {
                  //       purchaseId: record?.id,
                  //     })
                  //   )
                  // }
                >
                  {" "}
                  {text}
                </span>
              ),
            },
            {
              title: "Purchase Date",
              dataIndex: "createdAt",
              key: "createdAt",
              render: (text) => moment(text)?.format("DD MMM YYYY"),
              sorter: (a, b) =>
                tableSorter("chronological", a?.createdAt, b?.createdAt),
            },
            {
              title: "Customer",
              dataIndex: "customerName",
              key: "customerName",
            },
            {
              title: "Vendor",
              dataIndex: "vendor",
              key: "vendor",
              render: (record) => (
                <span className="vendor__name">
                  <img src={record?.displayPicture ?? faker.image.business()} />
                  {record?.name}
                </span>
              ),
            },
            {
              title: "Mode",
              dataIndex: "vendor",
              key: "vendor",
              render: (record: PurchaseListModel["vendor"]) =>
                record?.type == "online" ? "Online" : record?.instoreName,
            },
            {
              title: "Items Total",
              dataIndex: "totalAmount",
              key: "totalAmount",
              render: (text, record) => (
                <span className="vendor__name">
                  {/* {currencyString} */}
                  {text}
                </span>
              ),
            },
            {
              title: "Customer Payment",
              dataIndex: "customerPaymentStatus",
              key: "customerPaymentStatus",
              render: (text) => <BadgeComponent type={text} />,
              sorter: (a, b) =>
                tableSorter(
                  "alphabetical",
                  a?.customerPaymentStatus,
                  b?.customerPaymentStatus
                ),
            },
            {
              title: "Purchase Status",
              dataIndex: "purchaseStatus",
              key: "purchaseStatus",
              render: (text) => <BadgeComponent type={text} />,
              sorter: (a, b) =>
                tableSorter(
                  "alphabetical",
                  a?.purchaseStatus,
                  b?.purchaseStatus
                ),
            },
          ]}
          data={data}
          empty={{
            img: NoPurchasesImg,
            text: "No purchases",
          }}
        />
      </div>
    </PageView>
  );
};

export default Purchases;
