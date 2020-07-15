import React from "react";

import bootstrap from "bootstrap"; // eslint-disable-line no-unused-vars
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Field, Formik } from "formik";
import { Form, FormGroup, Label, Input, Select } from "reactstrap";
import Yup from "yup";
import { DisplayFormikState } from "./helper";

import "./styles.css";

const AddAnAbsence = props => {
  const {
    values,
    touched,
    errors,
    dirty,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset
  } = props;

  return (
    <div className="container">
      <h1>Plan an absence</h1>
      <br />
      <h3>Step1: Select an absence</h3>

      <p>Choose the leave of absence you are looking to take</p>

      <p>
        Your absence may be covered by the Family abd Medical Leave Act(FMLA).
        Visit the <a href="#">US Department of Labor</a> website for more
        information about your rights and resposibilities
      </p>

      <Form>
        <FormGroup check>
          <Label>What is the reason for this leave of absence?</Label>
          <br />
          <Label check>
            <Input type="radio" name="radio1" /> Personal Health Condition
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" /> Pregnancy/Maternity
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" /> Family Health Condition
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" /> other
          </Label>
        </FormGroup>
        <FormGroup onSubmit={handleSubmit}>
          <br />
          <Label>Select a reason that describes your absence</Label>
          <select
            name="color"
            id="color"
            step="1"
            placeholder="Select"
            value={values.color}
            onChange={handleChange}
          >
            {touched.color && typeof errors.color === "string" && errors.color}
            <option value="">Select</option>
            <option value="red">Value 1</option>
            <option value="blue">Value 2</option>
            <option value="green">Value 3</option>
            <option value="pink">Value 4</option>
            <option value="yellow">Value 5</option>
          </select>
          {errors.color && touched.color && (
            <div className="input-feedback">{errors.color}</div>
          )}
        </FormGroup>
        <br />
        <FormGroup check>
          <Label>What type of absence is being requested?</Label>
          <br />
          <Label check>
            <div className="txt-grey font-weight-bold">
              <Input type="radio" name="radio2" /> Continuous
            </div>
            <p className="txt-grey font-weight-100">what ever</p>
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <div className="txt-grey font-weight-bold">
              <Input type="radio" name="radio2" /> Intermittent
            </div>
            <p className="txt-grey font-weight-100">what ever</p>
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <div className="txt-grey font-weight-bold">
              <Input type="radio" name="radio2" /> Reduced Schedule
            </div>
            <p className="txt-grey font-weight-100">what ever</p>
          </Label>
        </FormGroup>
      </Form>
    </div>
  );
};
export default AddAnAbsence;
