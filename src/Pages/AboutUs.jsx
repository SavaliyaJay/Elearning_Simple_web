import React from "react";
import Tutor_Section from "./Tutor/Tutor_Section";
import Tutor_SubSection from './Tutor/Tutor_SubSection';

const AboutUs = () => {
  return (
    <>
      <div>AboutUs</div>
      {
        // eslint-disable-next-line
        <Tutor_Section />
      }
      {
        // eslint-disable-next-line
        <Tutor_SubSection/>
      }
    </>
  );
};

export default AboutUs;
