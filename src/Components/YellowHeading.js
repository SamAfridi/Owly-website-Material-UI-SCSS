import React from "react";
import "./yellowheading.scss";

const YellowHeading = (props) => {
  return (
    <>
      <h2 className="First_Heading">{props.heading2}</h2>
      <br />
      <br />
      <h6 className="secondHeading">{props.heading6}</h6>
    </>
  );
};

export default YellowHeading;
