import React, { FC, ReactNode } from "react";
import { Field, ErrorMessage, FormikProps } from "formik";
import { Input } from "antd";
import Error from "../Error";
import "./inputField.scss";
interface InputFieldProps {
  type?: "email" | "password" | "number" | "text";
  name: string;
  placeholder: string;
  label?: string;
  className?: string;
  suffix?: ReactNode;
  prefix?: ReactNode
}

const InputField: FC<InputFieldProps> = (props) => {
  const { name, label, className,  type = "text", ...rest } = props;
  return (
    <Field name={name}>
      {({ field, form: { touched, errors }, meta }: any) => (
        <div className={`input-field ${(meta?.error && meta.touched) && "error"} ${className}`}>
          {label ? <label>{label}</label> : ""}
          <Input data-testid={name} type={type} {...rest}  {...field} />
          {(meta.touched && meta.error) && (
            <Error
              testId={`input-error-${name}`}
              message={meta?.error}
              name={name}
            />
          )}
        </div>
      )}
    </Field>
  );
};

export default InputField;
