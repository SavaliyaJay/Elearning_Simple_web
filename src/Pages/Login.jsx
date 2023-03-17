import React from 'react'
import { Link } from 'react-router-dom';
import { Form, Formik } from "formik";
import CustomInput from "../components/CustomInput";
import { valiLogin } from './Validation/valiLogin';

const onSubmit = async (values, actions) => {
  console.log(values);
  

  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const Login = () => {
  return (
    <>
      <div className="mt-10">
        <section className="max-w-4xl p-6 mx-auto rounded-md shadow hover:shadow-lg">
          <h1 className="text-xl font-bold capitalize dark: text-center mb-1">Login Here!</h1>
          <hr />
          
          <Formik
            initialValues={{ email: "", password: ""}}
            validationSchema={valiLogin}
            onSubmit={onSubmit}
          >
            {({ isSubmitting, errors, handleChange ,handleBlur}) => (
              <Form >
                <div className="grid">

                </div>
                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">

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
                  
                  <div className="text-end col-span-2">
                    ForGot Password?
                  </div>
                </div>
                <hr className='mt-3' />
                <div className="flex justify-center mt-6">
                  <button type="submit" className="px-3 py-2 leading-5 text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none">Login</button>
                </div>
                <div className=" text-center mt-3">
                  Need an account?<Link to='/Registration' className='text-blue-500'> Sign up</Link>
                </div>
              </Form>
            )}
          </Formik>
        </section>


      </div>
    </>
  )
}

export default Login