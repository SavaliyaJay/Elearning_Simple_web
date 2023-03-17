import * as yup from "yup";

export const valiCourse = yup.object().shape({
    title: yup
        .string()
        .min(3)
        .max(15)
        .required("Required"),

    image: yup
        .mixed()
        .required("Required"),

    priceCourse: yup
        .number()
        .required("Required"),

    tutorName: yup
        .string()
        .min(3)
        .max(5)
        .required("Required"),
});