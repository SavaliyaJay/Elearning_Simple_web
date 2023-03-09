import * as yup from "yup";

export const valiLogin = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Required"),

  password: yup
    .string()
    .min(5)
    .required("Required"),

});