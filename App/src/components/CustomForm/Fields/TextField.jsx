import React from 'react';

import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

const CustomTextField = ({
  input,
  values,
  handleChange,
  handleBlur,
  errors,
  touched,
  setFieldValue,
}) => (
  <TextField
    {...input}
    type={input.type}
    formNoValidate
    multiline={input.multiline}
    rows={input.rows}
    name={input.name}
    helperText={touched[input.name] ? errors[input.name] : ''}
    error={Boolean(errors[input.name]) && Boolean(touched[input.name])}
    label={input.label}
    value={values[input.name] || ''}
    disabled={input.disabled || false}
    variant={input.variant}
    placeholder={input.placeholder}
    onChange={handleChange}
    onBlur={handleBlur}
    fullWidth
    InputProps={
      input.icon
        ? {
            endAdornment: (
              <InputAdornment position='end'>{input.icon}</InputAdornment>
            ),
          }
        : null
    }
  />
);

export default CustomTextField;
