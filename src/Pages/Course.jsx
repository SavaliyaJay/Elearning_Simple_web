import React, { useState } from "react";
// import { useSubmit } from "react-router-dom";
import Tutor_Course from "./Tutor/Tutor_Course";

const Course = () => {
  const [shown, setshown] = useState(false);
  const [updtxt, setupdtxt] = useState("Add A Course");
  const handleShow = (event) => {
    setshown((current) => !current);
    if(shown===true){
      setupdtxt("Add A Course");
    }else{
      setupdtxt("Close This Course Section");
    }
  };
  return (
    <>
      <div className="mt-10 ml-10">
        <button
          className="inline-flex items-center px-4 py-2 font-bold bg-indigo-700 hover:bg-indigo-800 text-white text-sm  rounded-md"
          onClick={handleShow}
        >
          {updtxt && (
            `${updtxt}`
          )}
          
        </button>
      </div>
      {shown && (
        <div className="mt-10 ml-10">
          {
            // eslint-disable-next-line
            <Tutor_Course />
          }
        </div>
      )}
    </>
  );
};

export default Course;
