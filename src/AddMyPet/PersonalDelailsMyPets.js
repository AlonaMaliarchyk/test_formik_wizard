import React from "react";
import { Field } from "formik";

export default ({ touched, errors }) => (
  <div>
    <label>Name Pet: </label>
    <Field name="petName" id="petName" />
    {touched.petName &&
      typeof errors.petName === "string" &&
      errors.petName}
    <br />
    <br />
    <label>Date of birth: </label>
    <Field name="dateOfBirthe" id="dateOfBirthe" />
    <br />
    <br />
    <label>Breed: </label>
    <Field name="breed" id="breed" />
  </div>
);
