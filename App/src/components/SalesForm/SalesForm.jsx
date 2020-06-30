import React, { useContext } from "react";
import { useParams, useHistory } from "react-router-dom";

import Paper from "@material-ui/core/Paper";

import { DataContext } from "../../context/DataContext";
import CustomForm from "../CustomForm";
import sendMailToUser from '../../mailSender';
import { getInitialValues, formFields, validationSchema } from "./formParams";

import styles from "./SalesForm.module.scss";

const SalesForm = () => {
  const { id } = useParams();
  const history = useHistory();
  const { changeData } = useContext(DataContext);

  const handleSubmit = async (values) => {
    changeData(values);
    await sendMailToUser(values);
    history.push("/delivery");
  };

  const initialValues = getInitialValues(id);

  return (
    <>
    <div className={styles.top}></div>
    <Paper elevation={3} className={styles.paper}>
      <div className={styles.container}>
        <CustomForm
          title="Formulario de Compra"
          initialValues={initialValues}
          fieldsArray={formFields}
          validationSchema={validationSchema}
          validateOnBlur
          onSubmit={handleSubmit}
          labelSubmit="Comprar"
          requiredMessage
        />
      </div>
    </Paper>
    </>
  );
};

export default SalesForm;
