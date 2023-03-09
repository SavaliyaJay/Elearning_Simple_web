import * as yup from "yup";

export const valiRegistration = yup.object().shape({
    username: yup
      .string()
      .min(3, "Username must be at least 3 characters long")
      .required("Required"),
  
    email: yup.string().email("Please enter a valid email").required("Required"),
  
    password: yup
      .string()
      .min(5)
      .required("Required"),
  
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Required"),
  
  });