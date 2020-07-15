import { withFormik } from "formik";
import * as Yup from "yup";

export default withFormik({
  displayName: "WizardForm",
  enableReinitialize: true,
  mapPropsToValues: ({ formData }) => ({
    ...formData
  }),
  validationSchema: () =>
    Yup.object().shape({
      color: Yup.string().required("Color is required!"),
      firstName: Yup.string().required("First name is required"),
      email: Yup.string().required("Email is required"),
      addressLine1: Yup.string().required("Address Line 1 is required")
    }),
  handleSubmit: (values, { setSubmitting }) => {
    console.log(values);
  }
});

// export default withFormik({
//   mapPropsToValues: () => ({ color: "" }),
//   validationSchema: Yup.object().shape({
//     color: Yup.string().required("Color is required!")
//   }),
//   handleSubmit: (values, { setSubmitting }) => {
//     setTimeout(() => {
//       alert(JSON.stringify(values, null, 2));
//       setSubmitting(false);
//     }, 1000);
//   },
//   displayName: "BasicForm" // helps with React DevTools
// })(MyForm);
