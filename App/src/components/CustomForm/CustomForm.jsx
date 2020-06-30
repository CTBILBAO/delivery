import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';

import Form from './Form';

const CustomForm = ({
  initialValues,
  fieldsArray,
  validationSchema,
  onSubmit,
  onReset,
  validateOnChange,
  validateOnBlur,
  labelSubmit,
  labelReset,
  addSubmit,
  addReset,
  title,
  requiredMessage,
  isSubmitting
}) => {
  return (
    <Formik
      validateOnChange={validateOnChange}
      validateOnBlur={validateOnBlur}
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={onSubmit}
      onReset={onReset}
      enableReinitialize={true}
    >
      {(props) => (
        <Form
          {...props}
          title={title}
          fieldsArray={fieldsArray}
          labelSubmit={labelSubmit}
          labelReset={labelReset}
          addReset={addReset}
          addSubmit={addSubmit}
          requiredMessage={requiredMessage}
        />
      )}
    </Formik>
  );
};

CustomForm.defaultProps = {
  validateOnChange: false,
  validateOnBlur: false,
  initialValues: {},
};

CustomForm.propTypes = {
  initialValues: PropTypes.object,
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
  validationSchema: PropTypes.object,
  onSubmit: PropTypes.func,
  onReset: PropTypes.func,
  validateOnChange: PropTypes.bool,
  labelSubmit: PropTypes.string,
  labelReset: PropTypes.string,
  addReset: PropTypes.bool,
  title: PropTypes.string,
};

export default CustomForm;
