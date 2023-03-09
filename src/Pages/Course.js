import React from 'react'
import { valiCourse } from './Validation/valiCourse';
import { Form, Formik } from "formik";
import CustomInput from "./CustomInput";
import CustomUpload from "./CustomUpload";


const onSubmit = async (values, actions) => {
  console.log(values);

  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const Course = () => {
  return (

    <>
      <div className="mt-10">
        <section className="max-w-4xl p-6 mx-auto rounded-md shadow hover:shadow-lg">
          <h1 className="text-xl font-bold capitalize dark: text-center mb-1">Add Course Here!</h1>
          <h2 className="text-xl capitalize dark: text-center mb-5">Enter Details of Course</h2>
          <hr />

          <Formik
            initialValues={{ title: "",image: "",priceCourse: "", tutorName: ""}}
            validationSchema={valiCourse}
            onSubmit={onSubmit}
          >
            {({ isSubmitting }) => (
              <Form >

                <div className="grid">


                </div>
                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-1">

                  <div>
                    {/* <label htmlFor="username">Username</label> */}

                    <CustomInput
                      label="title"
                      name="title"
                      type="text"
                      placeholder="Enter your title"
                    />
                  </div>
                  <div>
                    <CustomUpload
                      label="Upload Thumbnail"
                      type="file"
                      name="image"
                    />
                  </div>
                  <div>
                    <CustomInput
                      label="Price"
                      type="number"
                      name="priceCourse"
                    />
                  </div>
                  <div>
                    <CustomInput
                      label="Tutor Name"
                      type="text"
                      name="tutorName"
                    />
                  </div>
                </div>
                <hr className='mt-3' />
                <div className="flex justify-center mt-6">
                  <button disabled={isSubmitting} type="submit" className="px-3 py-2 leading-5 text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none">Let's Go</button>
                </div>
              </Form>
            )}
          </Formik>
        </section>


      </div>
    </>
  )
}

export default Course