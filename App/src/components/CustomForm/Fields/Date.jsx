import React from "react";

import TextField from "@material-ui/core/TextField";

const DatePicker = ({
  input,
  values,
  handleChange,
  handleBlur,
  errors,
  touched,
  setFieldValue,
}) => {

  return (
      <TextField
        {...input}
        name={input.name}
        helperText={touched[input.name] ? errors[input.name] : ''}
        error={Boolean(errors[input.name]) && Boolean(touched[input.name])}
        type="datetime-local"
        formNoValidate
        label={input.label}
        value={values[input.name] || ""}
        disabled={input.disabled || false}
        onChange={handleChange}
        onBlur={handleBlur}
        fullWidth
        InputLabelProps={{
          shrink: true,
        }}
      />
  );
};

export default DatePicker;
