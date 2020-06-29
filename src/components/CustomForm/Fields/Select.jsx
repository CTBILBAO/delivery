import React, { useMemo } from 'react';

import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import InputAdornment from '@material-ui/core/InputAdornment';

const CustomSelect = ({
  input,
  values,
  handleChange,
  handleBlur,
  errors,
  touched,
}) => {
  const { options } = input;
  const menuItems = useMemo(
    () =>
      options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      )),
    [options]
  );

  return (
    <TextField
      {...input}
      type={input.type}
      formNoValidate
      name={input.name}
      helperText={touched[input.name] ? errors[input.name] : ''}
      error={Boolean(errors[input.name]) && Boolean(touched[input.name])}
      label={input.label}
      value={values[input.name] || ''}
      disabled={input.disabled || false}
      variant={input.variant}
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
      select={true}
    >
      {menuItems}
    </TextField>
  );
};

export default CustomSelect;
