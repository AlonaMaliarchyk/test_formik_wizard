import React from "react";
import { Field } from "formik";
import ImageUploader from "../ImageUploader/ImgUploader"

const handleFotoChange = e => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    if (file) {
      //reader.onloadend = () => setFileName(file.name);
      console.log('FILE:', file);
      reader.readAsDataURL(file);
      //props.setFieldValue(props.field.name, file);
    }
  };

export default ({ touched, errors }) => (
  <div>
    <label>Add photo: </label>
    <ImageUploader></ImageUploader>


    <Field  id="file"
    name="file"
    type="file"
    onChange={handleFotoChange}
    className={
         errors.addPhoto && touched.addPhoto
         ? 'form-control is-invalid'
         : 'form-control'
     } />
    <br />
    <br />
    <label>Comments: </label>
    <Field name="comments" id="comments" />
  </div>
);
