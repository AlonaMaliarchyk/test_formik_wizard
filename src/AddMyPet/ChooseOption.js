import React from "react";
import { Field, Form } from "formik";
// const {
//     value,
//     setFieldValue
//   } = props;
export default ({ touched, errors }) => (
  <Form>
    <Field component="div" name="myRadioGroup">
        <input
          type="radio"
          id="yourPet"
          
          name="myRadioGroup"
          value="yourPet"
          defaultChecked={value.myRadioGroup === "yourPet"}
        //   onChange={() => setFieldValue("myRadioGroup", "yourPet")}
        />
        <label htmlFor="yourPet">your pet</label>

        <input
          type="radio"
          id="sell"
         
          name="myRadioGroup"
          value="sell"
          defaultChecked={value.myRadioGroup === "sell"}
        //   onChange={() => setFieldValue("myRadioGroup", "sell")}
        />
        <label htmlFor="sell">sell</label>

        <input
          type="radio"
          id="lostFound"
          
          name="myRadioGroup"
          value="lostFound"
          defaultChecked={value.myRadioGroup === "lostFound"}
        //   onChange={() => setFieldValue("myRadioGroup", "lostFound")}
        />
        <label htmlFor="lostFound">lost/found</label>

        <input
          type="radio"
          id="inGoodHands"
          
          name="myRadioGroup"
          value="inGoodHands"
          defaultChecked={value.myRadioGroup === "inGoodHands"}
          onChange={() => setFieldValue("myRadioGroup", "inGoodHands")}
        />
        <label htmlFor="inGoodHands">in good hands</label>
      </Field>
  </Form>
);