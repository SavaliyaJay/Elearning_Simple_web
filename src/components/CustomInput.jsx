import { useField } from "formik";

const CustomInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  // console.log(meta);


  return (
    <>
      <label htmlFor="username">{label}</label>
      <input
        {...field}
        {...props}
        className="block w-full px-4 py-2 mt-2 border rounded-md focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"     />
      {meta.touched && meta.error && <div className="text-red-900">{meta.error}</div>}
    </>
  );
};
export default CustomInput;