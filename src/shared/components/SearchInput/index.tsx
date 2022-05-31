import { Input } from "antd";
import React, { FC } from "react";
import IconComponent from "../IconComponent";
import "./searchInput.scss";

interface SearchInputProps {
    placeholder: string;
    onChange: (value: string) => void;
    disabled?: boolean;
}

const SearchInput: FC<SearchInputProps> = (props) => {
  const { placeholder, onChange, disabled } = props;

  return <Input disabled={disabled} prefix={<IconComponent name="icon-search" />} className="search-input" placeholder={placeholder} onChange={(e) => onChange(e?.target?.value)}/>;
};

export default SearchInput;
