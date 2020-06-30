import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import { Form } from 'formik';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import CustomField from './Fields';

function MeadowForm({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  isValid,
  isSubmitting,
  handleReset,
  fieldsArray,
  labelSubmit,
  labelReset,
  addSubmit,
  addReset,
  title,
  setFieldValue,
  requiredMessage,
}) {
  const inputs = useMemo(
    () =>
      fieldsArray.map((input, index) => (
        <Grid
          key={index}
          item
          xs={input.xs ? input.xs : 12}
          sm={input.sm ? input.sm : 12}
          md={input.md ? input.md : 12}
        >
          <CustomField
            input={input}
            values={values}
            handleChange={handleChange}
            handleBlur={handleBlur}
            errors={errors}
            touched={touched}
            setFieldValue={setFieldValue}
          />
        </Grid>
      )),
    [
      fieldsArray,
      values,
      errors,
      handleBlur,
      handleChange,
      setFieldValue,
      touched,
    ]
  );
  return (
    <Form noValidate>
      {title && (
        <Typography component='h4' variant='h4'>
          {title}
        </Typography>
      )}
      {requiredMessage && (
        <Typography variant='body2'>
          Los campos con <span style={{ color: '#DE3655' }}>*</span> son
          requeridos
        </Typography>
      )}
      <Grid container spacing={2}>
        {inputs}
      </Grid>
      <div id='formButtons'>
        {addReset && (
          <Button
            id='resetButton'
            variant='outlined'
            size='small'
            onClick={handleReset}
          >
            {labelReset}
          </Button>
        )}
        {addSubmit && (
          <Button
            id='submitButton'
            type='submit'
            variant='outlined'
            size='small'
            disabled={isSubmitting}
          >
            {labelSubmit}
          </Button>
        )}
      </div>
    </Form>
  );
}

MeadowForm.defaultProps = {
  fieldsArray: [],
  labelSubmit: 'submit',
  labelReset: 'cancel',
  addReset: false,
  addSubmit: true,
  requiredMessage: false,
};

MeadowForm.propTypes = {
  values: PropTypes.object,
  errors: PropTypes.object,
  touched: PropTypes.object,
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  isValid: PropTypes.bool,
  handleReset: PropTypes.func,
  setFieldValue: PropTypes.func,

  fieldsArray: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      name: PropTypes.string,
      label: PropTypes.string,
      multiline: PropTypes.bool,
      variant: PropTypes.string,
      rows: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      xs: PropTypes.number,
      sm: PropTypes.number,
      content: PropTypes.object,
      icon: PropTypes.object,
      options: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
          value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        })
      ),
    })
  ),
  labelSubmit: PropTypes.string,
  labelReset: PropTypes.string,
  addReset: PropTypes.bool,
  title: PropTypes.string,
  requiredMessage: PropTypes.bool,
};

export default MeadowForm;
