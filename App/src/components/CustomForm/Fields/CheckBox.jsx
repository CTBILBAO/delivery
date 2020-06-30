import React from 'react';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const CustomCheckBox = ({ input, handleChange, handleBlur, values }) => (
  <FormControlLabel
    control={
      <Checkbox
        name={input.name}
        onChange={handleChange}
        onBlur={handleBlur}
        checked={values[input.name]}
        value={values[input.name]}
        color='primary'
      />
    }
    label={input.label}
  />
);

export default CustomCheckBox;
