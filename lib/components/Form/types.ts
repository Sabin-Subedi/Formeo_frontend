import { FormikHandlers, FormikHelpers, FormikValues } from "formik";
import React from "react";
import * as yup from "yup";

export interface appFormProps {
  initialValues: {};
  onSubmit: (
    values: {},
    formikHelpers: FormikHelpers<{}>
  ) => void | Promise<any>;
  validationSchema: yup.AnyObjectSchema;
  children: React.ReactNode;
}