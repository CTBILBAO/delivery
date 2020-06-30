import React from 'react';

import Radio from '@material-ui/core/Radio';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const CustomRadio = ({ input, handleChange, handleBlur, values }) => (
  <FormControl component='fieldset'>
    <FormLabel component='legend'>{input.label}</FormLabel>
    <RadioGroup
      name={input.name}
      onChange={handleChange}
      onBlur={handleBlur}
      checked={values[input.name]}
      value={values[input.name]}
    >
      {input.options &&
        input.options.map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            control={<Radio color='primary' />}
            label={option.label}
            disabled={Boolean(option.disabled)}
          />
        ))}
    </RadioGroup>
  </FormControl>
);

export default CustomRadio;
