import { withFormik } from "formik";
import * as Yup from "yup";


const FILE_SIZE = 3000000;
const SUPPORTED_FORMATS = ['jpg', 'jpeg', 'png', 'bmp'];

export default withFormik({
  displayName: "WizardForm",
  enableReinitialize: true,
  mapPropsToValues: ({ formData }) => ({
    ...formData
  }),
  validationSchema: () =>
    Yup.object().shape({
      color: Yup.string().required("Color is required!"),
      petName: Yup.string().required("First name is required"),
      dateOfBirthe: Yup.string().required("Date of Birthe is required"),
      breed: Yup.string().required("Breed is required"),
      file: Yup.mixed()
      .nullable()
      .notRequired()
      .test("FILE_SIZE", "Uploaded file is too big.", 
          value => !value || (value && value.size <= FILE_SIZE))
      .test("FILE_FORMAT", "Uploaded file has unsupported format.", 
          value => !value || (value && SUPPORTED_FORMATS.includes(value.type))),
      comments: Yup.string().required("Comments is required"),
      addPhoto: Yup.string().required("addPhoto is required"),
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
