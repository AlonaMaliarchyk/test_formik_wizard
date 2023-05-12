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

import PersonalDelailsMyPets from "./AddMyPet/PersonalDelailsMyPets";
import MoreInfoMyPet from "./AddMyPet/MoreInfoMyPet";
import ChooseOption from "./AddMyPet/ChooseOption";
// import AddAnAbsence from "./AddAnAbsence";

// function createForms(selectedOption: AdPetType) {
//   const result = [];
//   switch (selectedOption) {
//     case AdPetType.InGoodHand:
//       result.push(<Step component={PersonalDelailsMyPets} title="Personal delailst" />);
//       result.push(<Step component={PersonalDelailsMyPets} title="Personal delailst" />);
//       result.push(<Step component={PersonalDelailsMyPets} title="Personal delailst" />);
//       result.push(<Step component={PersonalDelailsMyPets} title="Personal delailst" />);
//     break;
//     case AdPetType.Sell: result.push(<Step component={MoreInfoMyPet} title="More info" />); break;
//     case AdPetType.My: result.push(<Step component={AddressDetails} title="Address Details" />); break;
//     case AdPetType.LostAndFound: //... ; break;
//   }
//   return result;
// }


export default [

    // switch(selectedOption) {
    //   case AdPetType.Sell
    // }
  <Step component={ChooseOption} title="Choose Option" />,
  <Step component={PersonalDelailsMyPets} title="Personal delailst" />,
  <Step component={MoreInfoMyPet} title="More info" />,
  
  // <Step component={AddAnAbsence} title="Add Absence" />
];
