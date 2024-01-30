import React from "react";
import { useLocation } from "react-router-dom";

const AboutPage = () => {
  const {state:{phoneNumber}} = useLocation();
  // console.log(data);
  return <div>AboutPage - {phoneNumber} </div>;
};

export default AboutPage;
