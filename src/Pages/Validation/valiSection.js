import * as yup from "yup";

export const valiSection = yup.object().shape({
    title: yup
        .string()
        .min(3)
        .max(5)
        .required("Required"),

});