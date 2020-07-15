import React from "react";
import { render } from "react-dom";
import {
  FormikWizardProvider,
  Wizard,
  StepsList,
  ButtonsList,
  PreviousButton,
  NextButton,
  SubmitButton
} from "formik-wizard-form";
import { DisplayFormikState } from "./helper";
import stepComponentArray from "./stepComponentArray";
import stepValidations from "./stepValidations";
import withFormik from "./withFormik";

import "./styles.css";

function App(props) {
  return (
    <div className="App">
      <FormikWizardProvider {...props}>
        {({ getValidators, ...otherProps }) => (
          <Wizard {...otherProps}>
            <StepsList validators={getValidators(stepValidations)}>
              {stepComponentArray}
            </StepsList>
            <ButtonsList>
              <PreviousButton />
              <NextButton />
              <SubmitButton />
            </ButtonsList>
          </Wizard>
        )}
      </FormikWizardProvider>
      <DisplayFormikState {...props} />
    </div>
  );
}

const WithFormikApp = withFormik(App);

render(
  <WithFormikApp
    formData={{
      color: "",
      firstName: "",
      lastName: "",
      dob: "",
      email: "",
      phone: "",
      mobile: "",
      addressLine1: "",
      addressLine2: "",
      country: ""
    }}
  />,
  document.getElementById("root")
);
