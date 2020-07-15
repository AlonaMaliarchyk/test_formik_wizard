import React from "react";
import {
  // FormikWizardProvider,
  // Wizard,
  // StepsList,
  Step
  // ButtonsList,
  // PreviousButton,
  // NextButton,
  // SubmitButton
} from "formik-wizard-form";

import BasicDetails from "./BasicDetails";
import ContactDetails from "./ContactDetails";
import AddressDetails from "./AddressDetails";
import AddAnAbsence from "./AddAnAbsence";

export default [
  <Step component={BasicDetails} title="Basic Details" />,
  <Step component={ContactDetails} title="Contact Details" />,
  <Step component={AddressDetails} title="Address Details" />,
  <Step component={AddAnAbsence} title="Add Absence" />
];
