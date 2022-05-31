import { Select } from "antd";
import { ErrorMessage, Field } from "formik";
import React, { FC } from "react";
import { MetaModel } from "../../../models/Meta/meta.model";
import Error from "../Error";
import IconComponent from "../IconComponent";
import "./dropdownField.scss";

interface DropdownFieldProps {
  name: string;
  value: any;
  label: string;
  onChange: (value: any, record: any) => void;
  className?: string;
  placeholder: string;
  options: MetaModel[];
}

const DropdownField: FC<DropdownFieldProps> = (props) => {
  const { name, value, label, onChange, className, placeholder, options } = props;

  return (
    <Field name={name}>
      {({ field, form: { touched, errors, setTouched }, meta }: any) => (
        <div
          className={`dropdown-field ${
            meta?.error && meta.touched && "error"
          } ${className}`}
        >
          {label ? <label>{label}</label> : ""}
          <Select
            {...field}
            placeholder={placeholder}
            onChange={(value, record) => {
              onChange(value, record)
            }}
            data-testid={name}
            value={value}
            options={options}
            suffixIcon={<IconComponent name="icon-down"/>}
            onBlur={() => setTouched({...touched, [name]: true})}
          />
          <ErrorMessage name={name}>
            {(message: string) => <Error message={message} />}
          </ErrorMessage>
        </div>
      )}
    </Field>
  );
};

export default DropdownField;
