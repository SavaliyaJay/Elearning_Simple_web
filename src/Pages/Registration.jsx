import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Form, Formik } from "formik";
import CustomInput from "../components/CustomInput";
import CustomSelect from "../components/CustomSelect";
import { valiRegistration1 } from './Validation/valiRegistration1';
import axios from "axios";

// const onSubmit = async (values, actions) => {
//   console.log(values);

//   await new Promise((resolve) => setTimeout(resolve, 1000));
//   actions.resetForm();
// };


const Registration = () => {

  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);


  const onSubmit = async (values, actions) => {
    const { confirmPassword, ...data } = values;

    const response = await axios
      .post("http://localhost:3000/api/v1/users/register", data)
      .catch((err) => {
        if (err && err.response) setError(err.response.data.message);
        setSuccess(null);
      });

    if (response && response.data) {
      setError(null);
      setSuccess(response.data.message);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      actions.resetForm();
    }
  };
  return (

    // <div>Registration</div>
    <>
      {!error && <span className='inline-block align-middle bg-green-500'>{success ? success : ""}</span>}
      {!success && <span className='inline-block align-middle bg-red-500'>{error ? error : ""}</span>}
      <div className="mt-10">
        <section className="max-w-4xl p-6 mx-auto rounded-md shadow hover:shadow-lg">
          <h1 className="text-xl font-bold capitalize dark: text-center mb-1">Register Here!</h1>
          <h2 className="text-xl capitalize dark: text-center mb-5">Enter Your Details</h2>
          <hr />

          <Formik
            initialValues={{ username: "", email: "", password: "", confirmPassword: "", phone: "", userType: "" }}
            validationSchema={valiRegistration1}
            onSubmit={onSubmit}
          >
            {({ isSubmitting }) => (
              <Form >

                <div className="grid">


                </div>
                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">

                  <div>
                    {/* <label htmlFor="username">Username</label> */}

                    <CustomInput
                      label="Username"
                      name="username"
                      type="text"
                      placeholder="Enter your username"
                    />
                  </div>
                  <div>
                    {/* <label htmlFor="emailAddress">Email Address</label> */}
                    <CustomInput
                      label="Email Address"
                      name="email"
                      type="email"
                      placeholder="Enter your Email"
                    />
                  </div>
                  <div>
                    {/* <label htmlFor="password">Password</label> */}
                    <CustomInput
                      label="Password"
                      name="password"
                      type="password"
                      placeholder="Enter your Password"
                    />
                  </div>
                  <div>
                    {/* <label htmlFor="passwordConfirmation">Password Confirmation</label> */}
                    <CustomInput
                      label="Confirm Password"
                      name="confirmPassword"
                      type="password"
                      placeholder="Enter your Confirm Password"
                    />
                  </div>
                  <div>
                    {/* <label htmlFor="phone">Contact Number</label> */}
                    <CustomInput
                      label="Contact Number"
                      name="phone"
                      type="number"
                      placeholder="Enter your Phone Number"
                    />
                  </div>
                  <div>
                    <CustomSelect
                      label="Type"
                      name="userType"
                      placeholder="Select your type for registration"
                    >
                      <option value="">Select your type for registration</option>
                      <option value="true">Student</option>
                      <option value="false">Tutor</option>
                    </CustomSelect>

                  </div>

                </div>
                <hr className='mt-3' />
                <div className="flex justify-center mt-6">
                  <button disabled={isSubmitting} type="submit" className="px-3 py-2 leading-5 text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none">Let's Go</button>
                </div>
                <div className="mt-3 text-center">
                  Already have an account?<Link to='/Login' className='text-blue-500'> Sign in</Link>
                </div>
              </Form>
            )}
          </Formik>
        </section>


      </div>
    </>
  )
}

export default Registration