import React from 'react';
import "./goals.scss";

const Heading = (props) => {
  return (
    <>
         <h2>{props.heading2}</h2>
          <br />
          <br />
          <h3>{props.heading3}</h3>
          <br />
          <br />
          <h6>
          {props.heading6}
          </h6>
    </>
  )
}

export default Heading;