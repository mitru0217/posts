import React from "react";
import { MySelect, SelectWrapper } from "./Select.styled";

const Select = ({ options, defaultValue, value, onChange }) => {
  return (
    <SelectWrapper>
      <MySelect value={value} onChange={(evt) => onChange(evt.target.value)}>
        <option disabled value=''>
          {defaultValue}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </MySelect>
    </SelectWrapper>
  );
};

export default Select;
