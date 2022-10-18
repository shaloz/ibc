export default [
  {
    placeholder: "First name*",
    className: {
      hasErrors: false,
      classNameWithNoErrors: "auth007",
      classNameWithErrors: "auth007 authError",
    },
    value: "",
    type: "text",
    name: "firstName",
  },
  {
    placeholder: "Last name*",
    className: {
      hasErrors: false,
      classNameWithNoErrors: "auth007",
      classNameWithErrors: "auth007 authError",
    },
    value: "",
    type: "text",
    name: "lastName",
  },

  {
    placeholder: "Your email*",
    className: {
      hasErrors: false,
      classNameWithNoErrors: "auth008",
      classNameWithErrors: "auth008 authError",
    },
    value: "",
    type: "email",
    name: "email",
  },
  {
    placeholder: "New password*",
    className: {
      hasErrors: false,
      classNameWithNoErrors: "auth008",
      classNameWithErrors: "auth008 authError",
    },
    value: "",
    type: "password",
    name: "password",
  },

  {
    name: "areaCode",
    value: "",
    className: {
      hasErrors: false,
      classNameWithNoErrors: "auth0014",
      classNameWithErrors: "auth0014 authError",
    },
  },
  {
    name: "phoneNumber",
    value: "",
    className: {
      hasErrors: false,
      classNameWithNoErrors: "auth0015",
      classNameWithErrors: "auth0015 authError",
    },
  },
  {
    name: "verificationCode",
    value: "",
    className: {
      hasErrors: false,
      classNameWithNoErrors: "auth008",
      classNameWithErrors: "auth008 authError",
    },
  },
];
