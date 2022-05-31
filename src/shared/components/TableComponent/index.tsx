import { Badge, Divider, Dropdown, Skeleton, Table } from "antd";
import { ColumnsType, ColumnType } from "antd/lib/table";
import { Form, Formik, FormikValues } from "formik";
import { DefaultRecordType } from "rc-table/lib/interface";
import React, {
  FC,
  Fragment,
  ReactElement,
  useCallback,
  useMemo,
  useState,
} from "react";
import ButtonComponent from "../ButtonComponent";
import IconComponent from "../IconComponent";
import SearchInput from "../SearchInput";
import "./tableComponent.scss";
import { debounce } from "lodash";
interface TableEmptyComponentProps {
  img?: string;
  text?: string;
}
interface TableComponentProps {
  search?: {
    placeholder: string;
    onSearch: (value: string) => void;
  };
  filter?: ReactElement;
  newBtn?: {
    clickHandler: () => void;
  };
  data?: any[];
  columns: ColumnsType<DefaultRecordType>;
  onRow?: (data: any, rowIndex: number | undefined) => void;
  rowClassName?: (record: any, index: number) => string;
  loading?: boolean;
  empty?: TableEmptyComponentProps;
}

interface TableFilterComponentProps {
  clearHandler: () => void;
  applyHandler: () => void;
}

interface TableFilterDropdownComponentProps {
  visibilityHandler: (visibility: boolean) => void;
  visible: boolean;
  count?: number;
}

export const TableFilterComponent: FC<TableFilterComponentProps> = ({
  children,
  clearHandler,
  applyHandler,
}) => {
  return (
    <div className="table-filter-component">
      <div className="table-filter-component-header">
        <div className="title">Filter</div>
        <div className="controllers">
          <div
            className="clear"
            key={1}
            onClick={(e) => {
              clearHandler();
            }}
          >
            Clear Filter
          </div>
          <div
            key={2}
            className="apply"
            onClick={(e) => {
              applyHandler();
            }}
          >
            Apply Filter
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

export const TableFilterDropdownComponent: FC<
  TableFilterDropdownComponentProps
> = ({ children, visible, visibilityHandler, count }) => {
  return (
    <Dropdown
      placement="bottomRight"
      trigger={["click"]}
      visible={visible}
      onVisibleChange={visibilityHandler}
      overlay={children as ReactElement}
    >
      <Badge count={count} color="#4537a0">
        <div className="filter-dropdown-icon">
          <IconComponent name="icon-filter" />
        </div>
      </Badge>
    </Dropdown>
  );
};

const TableLoadingComponent = () => {
  const emptyData = Array(11).fill(" ");
  return (
    <div className="table-loading__component">
      {emptyData?.map((_, i) => (
        <Skeleton.Button key={i} active={true} size="small" shape="round" />
      ))}
    </div>
  );
};

const TableEmptyComponent: FC<TableEmptyComponentProps> = ({ text, img }) => {
  return (
    <div className="table-empty__component">
      <img className="empty__img" src={img} />
      <div className="empty__text">{text}</div>
    </div>
  );
};

const TableComponent: FC<TableComponentProps> = (props) => {
  const {
    search,
    data,
    columns,
    filter,
    newBtn,
    onRow,
    rowClassName,
    loading,
    empty,
  } = props;

  const handleSearch = useMemo(
    () => search?.onSearch && debounce(search?.onSearch, 500),
    []
  );

  return (
    <div
      className={`table-component ${filter && "filter"} ${newBtn && "new"} ${
        !loading && !data?.length && "empty"
      }`}
    >
      {data?.length || loading || newBtn || search ? (
        <Fragment>
          <div className="table-actions">
            {search && (
              <SearchInput
                placeholder={search?.placeholder ?? ""}
                onChange={(value:any) => {
                  if (handleSearch) handleSearch(value);
                }}
              />
            )}

            {filter && data?.length ? filter : ""}
            {newBtn && (
              <ButtonComponent
                type="primary"
                size="medium"
                onClick={newBtn?.clickHandler}
              >
                New
              </ButtonComponent>
            )}
          </div>
          {(newBtn || search) && <Divider />}
        </Fragment>
      ) : (
        ""
      )}

      <Table
        onRow={(record, rowIndex) => {
          return {
            onClick: () => onRow && onRow(record, rowIndex),
          };
        }}
        rowClassName={rowClassName}
        pagination={false}
        dataSource={data}
        columns={columns}
        locale={{
          emptyText: loading ? (
            <TableLoadingComponent />
          ) : empty ? (
            <TableEmptyComponent img={empty?.img} text={empty?.text} />
          ) : (
            ""
          ),
        }}
      />
    </div>
  );
};

export default TableComponent;
