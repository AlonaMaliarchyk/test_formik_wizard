export default [
  function basicValidations({ errors }) {
    return !errors.firstName;
  },

  function contactValidations({ errors }) {
    return !errors.email;
  },

  function addressValidations({ errors }) {
    return !errors.addressLine1;
  },
  function addAdnAbsenceValidation({ errors }) {
    return !errors.color;
  }
];
