import React from "react";

import CustomRadio from "./Radio";
import CustomSelect from "./Select";
import CustomCheckbox from "./CheckBox";
import CustomTextField from "./TextField";
import CustomDateField from './Date';

const CustomField = (props) => {
  const {
    input: { type },
  } = props;

  const fields = {
    radio: <CustomRadio {...props} />,
    select: <CustomSelect {...props} />,
    text: <CustomTextField {...props} />,
    checkbox: <CustomCheckbox {...props} />,
    password: <CustomTextField {...props} />,
    date: <CustomDateField {...props} />
  };

  return fields[type];
};

export default CustomField;
