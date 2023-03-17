import * as yup from "yup";

export const valiSubSection = yup.object().shape({
    title: yup
        .string()
        .min(3)
        .max(5)
        .required("Required"),

});