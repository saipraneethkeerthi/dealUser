import { DatePicker } from "antd";
import { ErrorMessage, Field } from "formik";
import moment from "moment";
import React, { FC } from "react";
import Error from "../Error";
import IconComponent from "../IconComponent";
import "./datePickerField.scss";

interface DatePickerFieldProps {
  name: string;
  value: any;
  label: string;
  onChange: (date: moment.Moment | null, dateString: string) => void;
  className?: string;
  placeholder: string;
  format?: string;
}

const DatePickerField: FC<DatePickerFieldProps> = (props) => {
  const { name, value, label, placeholder, format, onChange, className } = props;

  return (
    <Field name={name}>
      {({ field, form: { touched, errors }, meta }: any) => (
        <div
          className={`date-picker-field ${
            meta?.error && meta.touched && "error"
          } ${className}`}
        >
          {label ? <label>{label}</label> : ""}
          <DatePicker
            value={value && moment(value)}
            format={format}
            placeholder={placeholder}
            suffixIcon={<IconComponent name="icon-calender"/>}
            onChange={onChange}
          />
           <ErrorMessage name={name}>
            {(message: string) => <Error message={message} />}
          </ErrorMessage>
        </div>
      )}
    </Field>
  );
};

export default DatePickerField;
