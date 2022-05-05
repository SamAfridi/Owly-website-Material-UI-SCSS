import React from 'react';
import "./Button.scss";
import { Button } from "@mui/material";

const CustomeButton = (props) => {
  return (
    <>
            <Button
           variant="outlined"
          className="button"
          sx={{
            color: "black",
            borderColor: "black",
            fontWeight: "600",
            textTransform: "capitalize",
            transition: "all 0.5s",
            
          }}
        >
          {" "}
          <span>{props.name}</span>
        </Button>
    </>
  )
}

export default CustomeButton;